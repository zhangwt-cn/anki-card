package handler

import (
	"anki-card/internal/model/request"
	"anki-card/internal/model/response"
	"anki-card/internal/service"
	"github.com/gin-gonic/gin"
	"net/http"
)

// GenerateCard CreateCard
// @Summary Create card
// @Description Create  card
// @Tags card
// @Accept json
// @Produce json
// @Param req body request.CreateCard true "Create card"
// @Success 200 {object} response.Response
// @Router /card/generate [post]
func GenerateCard(c *gin.Context) {
	var req request.CreateCard
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusOK, response.BadRequest(err.Error()))
		return
	}
	content, err := service.GenerateCard(req)
	if err != nil {
		c.JSON(http.StatusOK, response.InternalServerError(err.Error()))
		return
	}

	c.JSON(http.StatusOK, response.Success(content))
}
