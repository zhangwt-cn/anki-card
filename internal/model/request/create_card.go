package request

type CreateCard struct {
	Material string `json:"material" binding:"required"`
	ApiUrl   string `json:"apiUrl" `
	ApiKey   string `json:"apiKey"`
}
