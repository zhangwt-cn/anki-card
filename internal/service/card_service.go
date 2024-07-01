package service

import (
	"anki-card/internal/model/request"
	"anki-card/internal/model/response"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// GenerateCard generate card
func GenerateCard(req request.CreateCard) ([]response.BasicCard, error) {
	cards, err := basic(req)
	if err != nil {
		return nil, fmt.Errorf("failed to generate card: %w", err)
	}
	return cards, nil
}

func basic(req request.CreateCard) ([]response.BasicCard, error) {
	resp, err := makeOpenAIRequest(req)
	if err != nil {
		return nil, fmt.Errorf("failed to make OpenAI request: %w", err)
	}
	choice := resp.Choices[0]
	cardJson := choice.Message.Content

	var cards []response.BasicCard
	// json -> cards
	err = json.Unmarshal([]byte(cardJson), &cards)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal card json: %w", err)
	}

	return cards, nil
}

func makeOpenAIRequest(c request.CreateCard) (*request.ChatCompletionResponse, error) {
	client := &http.Client{}

	reqBody := request.ChatCompletionRequest{
		Model: "gpt-4o",
		Messages: []request.Message{
			{
				Role:    "system",
				Content: "你是一个学者,需要将以下材料中的知道转换为Anki卡片,只返回生成后的json,json格式是[{\"question\":\"\",\"answer\":\"\"}]",
			},
			{
				Role:    "user",
				Content: c.Material,
			},
		},
	}

	requestBodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal request body: %w", err)
	}

	req, err := http.NewRequest("POST", c.ApiUrl, bytes.NewBuffer(requestBodyBytes))
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Bearer "+c.ApiKey)
	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("failed to make request: %w", err)
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			fmt.Println("Failed to close response body")
		}
	}(resp.Body)

	if resp.StatusCode != http.StatusOK {
		bodyBytes, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("error response from OpenAI: %s", bodyBytes)
	}

	var responseBody request.ChatCompletionResponse
	err = json.NewDecoder(resp.Body).Decode(&responseBody)
	if err != nil {
		return nil, fmt.Errorf("failed to decode response body: %w", err)
	}

	return &responseBody, nil
}
