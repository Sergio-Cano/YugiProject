module.exports = {
    400: {
        statusCode: 400,
        error: new Error('all fields are mandatory'),
    },
    wrong_data: {
        statusCode: 400,
        error: new Error('username or password incorrects'),
    },
    pass_length: {
        statusCode: 400,
        error: new Error('password length must be at least 4'),
    },
    401: {
        statusCode: 401,
        error: new Error('unauthorized'),
    },
    cors: {
        statusCode: 401,
        error: new Error('unauthorized by CORS error'),
    },
    404: {
        statusCode: 404,
        error: new Error('path not found'),
    },
    500: {
        statusCode: 500,
        error: new Error('something went wrong!'),
    },
    short_deck: {
        statusCode: 406,
        error: new Error('Main Deck must be at least 40 cards'),
    },
    long_main_deck: {
        statusCode: 406,
        error: new Error('Main Deck must be at most 60 cards'),
    },
    long_extra_deck: {
        statusCode: 406,
        error: new Error('Extra Deck must be at most 15 cards'),
    },
    card_not_found: {
        statusCode: 404,
        error: new Error('No card matching your query was found')
    },
    empty_search: {
        statusCode: 400,
        error: new Error('You must use at least one filter for your search')
    }
}