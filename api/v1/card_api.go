package v1

import (
	"github.com/gin-gonic/gin"
)

func cardRoutes(router *gin.RouterGroup) {
	router.Group("/card")
}
