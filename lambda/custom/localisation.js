// Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Amazon Software License
// http://aws.amazon.com/asl/

/**
 * This file defines the prompts, reprompts, APL content for each supported locale
 */

// List of localized recipes (all locales)
const recipes = require("./recipes");

// List of localized strings (all locales)
module.exports = {
    en: {
        translation: {
            RECIPES: recipes.en,
            SKILL_NAME: `Sauce Boss`,
            HEADER_TITLE: `Welcome to {{skillName}}`,
            RECIPE_HEADER_TITLE: `HOW TO MAKE {{sauce}} SAUCE`,
            HELP_HEADER_TITLE: `HELP`,
            HELP_HEADER_SUBTITLE: `Select the sauce you want to prepare`,
            WELCOME_MESSAGE: `Welcome to {{skillName}}. You can ask a question like, what's the recipe for {{sauce}} sauce? ... Now, which sauce would you like to prepare?`,
            WELCOME_REPROMPT: `For instructions on what you can say, please say help me.  Which sauce would you like to prepare?`,
            DISPLAY_CARD_TITLE: `{{skillName}}  - Recipe for {{sauce}}`,
            HELP_MESSAGE: `You can ask questions such as, what's the recipe for {{sauce}}, or, you can say exit ... Now, which sauce would you like to prepare?`,
            HELP_REPROMPT: `You can say things like, what's the recipe for {{sauce}}, or you can say exit ... Now, which sauce would you like to prepare?`,
            STOP_MESSAGE: `Goodbye!`,
            RECIPE_REPEAT_MESSAGE: `Try saying repeat.`,
            RECIPE_NOT_FOUND_WITH_ITEM_NAME: `I'm sorry, I currently do not know the recipe for {{sauce}}. Which sauce would you like to prepare ?`,
            RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME: `I'm sorry, I currently do not know that recipe. Which sauce would you like to prepare?`,
            RECIPE_NOT_FOUND_REPROMPT: `Which sauce would you like to prepare?`,
            ERROR_MESSAGE: `I'm sorry I didn't catch that. Can you reformulate please ?`,
            HINT_TEMPLATE: `How do I make {{sauce}} sauce?`,
            REFLECTOR_MESSAGE: `You just triggered {{intentName}}`
        }
    }
};