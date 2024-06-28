package handler

import (
	"anki-card/utils"
	"github.com/gin-gonic/gin"
)

// Ping PingExample godoc
// @Summary ping example
// @Schemes
// @Description do ping
// @Tags ping
// @Accept json
// @Produce json
// @Success 200 {string} string "pong"
// @Router /ping [get]
func Ping(c *gin.Context) {
	c.JSON(200, utils.Success("pong"))
}
