package utils

import (
	"net/http"
)

type Response struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

// Success response
func Success(data interface{}) Response {
	return Response{
		Code:    200,
		Message: "Success",
		Data:    data,
	}
}

// Error response
func Error(code int, message string) Response {
	return Response{
		Code:    code,
		Message: message,
	}
}

// BadRequest response
func BadRequest(message string) {
	Error(http.StatusBadRequest, message)
}

// InternalServerError response
func InternalServerError(message string) {
	Error(http.StatusInternalServerError, message)
}
