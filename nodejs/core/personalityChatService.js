// 
// Copyright (c) Optum. All rights reserved.
// Licensed under the MIT license.
//

const rp = require('request-promise-native');

var personalityChatService = function(options) {
    this.baseUrl = "https://smarttalk.azure-api.net/api/v1/botframework";
    this.personalityChatOptions = options;

    this.queryService = function(query) {
        /* query is a string like 'hey whats up loser' */
        return rp({
            url: this.baseUrl,
            method: "POST",
            json: true,
            body: {
                Query: query,
                Persona: this.personalityChatOptions.persona
            },
            headers: {
                "Ocp-Apim-Subscription-Key": this.personalityChatOptions.subscriptionKey
            },
            timeout: 8000
        }).then(function(response) {
            return response;
        }).catch(function(err) {
            console.error(err);
            return null;
        });
    }
    return this;
}

module.exports = personalityChatService;