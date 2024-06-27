package v1

import (
	"anki-card/internal/handler"
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		v1.GET("/ping", handler.Ping)
	}
	cardRoutes(v1)
}
