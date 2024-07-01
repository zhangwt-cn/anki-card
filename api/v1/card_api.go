package v1

import (
	"anki-card/internal/handler"
	"github.com/gin-gonic/gin"
)

func cardRoutes(router *gin.RouterGroup) {
	card := router.Group("/card")
	{
		card.POST("/generate", handler.GenerateCard)
	}
}
