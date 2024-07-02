package request

type CreateCard struct {
	Material string `json:"material" binding:"required"`
	Model    string `json:"model" binding:"required"`
	ApiUrl   string `json:"apiUrl" binding:"required"`
	ApiKey   string `json:"apiKey" binding:"required"`
}
