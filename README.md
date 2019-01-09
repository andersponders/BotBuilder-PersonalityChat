
## Personality Chat
Personality Chat makes it easy to add small talk capabilities to your chatbot. Small talk/chit-chat helps to make chatbots more conversational and personable. This package has more than a 100 scenarios of small talk in the voice of three personas - professional, friendly, humorous. Choose the persona that most closely resembles your chatbot's voice.
Given a user query or message, Personality chat tries to match it with the closest scenario using deep learnt similarity models and lexical features. Personality chat also provides editorialy curated responses for each scenario based on the selected persona.
[See a quick tutorial and overview video here.](https://youtu.be/5C_uD8g2QKg )

If interested in participating in a private preview or access to higher throttling limits, please contact personalitychat@microsoft.com.

|User query        |Professional​ |Friendly​ |Humorous​ |
|-|-|-|-|
|*Thank you*​ |You're quite welcome.​ |You bet.​ |No prob.​ |
|*Will you marry me?*|I think it's best if we <br> stick to a professional relationship.​ |You're three-dimensional.<br> I'm non-dimensional. Our love can never be.​ |Sure. Take me to City Hall.<br> See what happens.​ |
|*Who made you?*|There wouldn't be time to list everyone.​ |So many people!​ |Nerds.​ |

## Using Personality chat in your bot

#### Nuget package support

| | | |
|-|-|-|
| [Personality Chat in Microsoft Bot Framework SDK v3](CSharp/PersonalityChat-BotBuilderV3/README.md) |[Nuget package](https://www.nuget.org/packages/Microsoft.Bot.Builder.PersonalityChat/3.0.0-alpha-m1.0) | |
| [Personality Chat in Microsoft Bot Framework SDK v4](CSharp/PersonalityChat/README.md) |[Nuget package](https://www.nuget.org/packages/Microsoft.Bot.Builder.PersonalityChat/4.0.0-alpha-m1.0) |[EndToEnd Sample](CSharp/EndToEndSamples/) |
| [Calling Personality Chat API directly using core wrapper](CSharp/Core/README.md) |[Nuget package](https://www.nuget.org/packages/Microsoft.Bot.Builder.PersonalityChat.Core/1.0.0-alpha-m1.0) | |

#### Nodejs/npm
check out the "nodejs/samples" folder for an example

#### Personality Chat Datasets
[Directions for Using Personality Chat Datasets](https://github.com/Microsoft/BotBuilder-PersonalityChat/blob/master/CSharp/Datasets)- Personality chat dataset containing responses and few representative queries for facilitating building your own models using LUIS or QNAMaker.
Please note that the scenario matching models provided by the PersonalityChat API has been developed using deep models trained on large number of editorial queries and grammars. Using datasets directly won't include the rich query understanding capabilities provided by the PersonalityChat API.

## How Personality Chat API works
Personality Chat matches the user's small talk query with a small talk scenario. It does query understanding (QU) to lexically and semantically match a user query.  All matched scenarios are returned along with the confidence score. If no scenario is matched, no response is returned. Additionally is also checks for a few indicators to determine how to respond.
* `isChatQuery`: Does the query look like a chitchat/small talk query rather than a real user question?

Check out the [Editorial Scenarios and sample query for Personality Chat](EditorialScenarioList.md)


### Throttling limits
We enforce throttling limits on the Personality Chat API at the rate of 30 queries per minute. Throttling is done based on the IP address. 

If you are throttled, the API returns a 429 HTTP response with the message *Rate limit is exceeded. Try again in X seconds.*

## Personality Chat - Beyond editorial content
Personality Chat also includes a component that is capable of generating responses real-time *without* editorial content. It uses a Deep Neural Network to generate answers to a chitchat query. This is available as a demo playground chat in [Microsoft Cognitive Labs ](https://go.microsoft.com/fwlink/?linkid=872337&clcid=0x409) for a restricted set of query intents.


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
