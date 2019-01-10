// 
// Copyright (c) Optum. All rights reserved.
// Licensed under the MIT license.
//

var personalityChatOptions = function(subscriptionKey, persona, scenarioResponseList) {
    this.subscriptionKey = subscriptionKey;
    this.persona = persona;
    this.scenarioResponseList = scenarioResponseList;
    return this;
}

module.exports = personalityChatOptions;