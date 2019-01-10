// 
// Copyright (c) Optum. All rights reserved.
// Licensed under the MIT license.
//

var personalityChatMiddlewareOptions = function(respondOnlyIfChat, scoreThreshold, endActivityRoutingOnResponse) {
    this.respondOnlyIfChat = respondOnlyIfChat;
    this.scoreThreshold = scoreThreshold;
    this.endActivityRoutingOnResponse = endActivityRoutingOnResponse;
    return this;
}

module.exports = personalityChatMiddlewareOptions;