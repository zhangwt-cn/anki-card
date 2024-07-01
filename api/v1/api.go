package v1

import (
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	{
		cardRoutes(v1)
	}
}
