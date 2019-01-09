const personalityChatOptions = require('./core/personalityChatOptions.js');
const personalityChatPersona = requrie('./core/personalityChatPersona.js');
const personalityChatService = require('./core/personalityChatService.js');

const personalityChatMiddleware = require('./middleware/personalityChatMiddleware.js');
const personalityChatMiddlewareOptions = require('./middleware/personalityChatMiddlewareOptions.js');

module.exports = {
    personalityChatOptions: personalityChatOptions,
    personalityChatPersona: personalityChatPersona,
    personalityChatService: personalityChatService,

    personalityChatMiddleware: personalityChatMiddleware,
    personalityChatMiddlewareOptions: personalityChatMiddlewareOptions
}