package service

import (
	"anki-card/internal/model/request"
	"anki-card/internal/model/response"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
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

	// replace ```json and ``` with empty string
	cardJson = strings.ReplaceAll(cardJson, "```json", "")
	cardJson = strings.ReplaceAll(cardJson, "```", "")

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
		Model: c.Model,
		Messages: []request.Message{
			{
				Role:    "system",
				Content: "提取以下材料中的所有知识点并将其转换为Anki卡片格式。每个知识点的提取要必须严格遵循以下规则：\n1. 对于每个知识点，生成一个问题和答案对。\n2. 如果材料中包含MarkDown数学公式，将其保持原样提取出来并在公式的前后加上空格。\n3. 最终输出为JSON格式，每个知识点对应一个JSON对象，格式为： [{\"question\":\"\",\"answer\":\"\"}]\n4. 确保生成的JSON可以直接被代码解析，不包含多余的符号或字符，如```json等代码块标记。\n",
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
