const personalityChatService = require('../core/personalityChatService.js');

function personalityChatMiddleware(personalityChatOptions, personalityChatMiddlewareOptions) {
    this.personalityChatOptions = personalityChatOptions;
    this.personalityChatMiddlewareOptions = personalityChatMiddlewareOptions;
    this.svc = new personalityChatService(personalityChatOptions);

    this.onTurn = async function(turnContext, next) {
        if (turnContext.activity.type === 'message') {
            let query = turnContext.activity.text;
            if (query) {
                var results = await this.svc.queryService(query);
                if (!this.personalityChatMiddlewareOptions.respondOnlyIfChat || results.IsChatQuery) {
                    var personalityChatResponse = this.getRandomizedReponse(results);
                    if (personalityChatResponse) await turnContext.sendActivity(personalityChatResponse);
                }
            }
        }

        if (turnContext.responded && this.personalityChatMiddlewareOptions.endActivityRoutingOnResponse) {
            return;
        }

        await next();
    }

    this.getRandomizedReponse = function(results) {
        var matchedScenarios = results.ScenarioList;
        if (matchedScenarios && matchedScenarios.length > 0) {
            var top = matchedScenarios[0];
            if (top.Score > this.personalityChatMiddlewareOptions.scoreThreshold && 
                top.Responses &&
                top.Responses.length > 0) {
                
                let randomIdx =  Math.floor(Math.random() * top.Responses.length);
                return top.Responses[randomIdx];
            }
        }
    }

    return this;
}

module.exports = personalityChatMiddleware;