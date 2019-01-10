// 
// Copyright (c) Optum. All rights reserved.
// Licensed under the MIT license.
//

const personalityChatOptions = require('./core/personalityChatOptions.js');
const personalityChatPersona = require('./core/personalityChatPersona.js');
const personalityChatService = require('./core/personalityChatService.js');

const personalityChatMiddleware = require('./middleware/personalityChatMiddleware.js');
const personalityChatMiddlewareOptions = require('./middleware/personalityChatMiddlewareOptions.js');

module.exports = {
    Options: personalityChatOptions,
    Persona: personalityChatPersona,
    Service: personalityChatService,

    Middleware: personalityChatMiddleware,
    MiddlewareOptions: personalityChatMiddlewareOptions
}