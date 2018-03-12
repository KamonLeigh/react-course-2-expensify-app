// import moment from 'moment'

const moment = require.requireActual('moment'); // mocks out a given library

export default (timestamp = 0) => {
    return moment(timestamp);
}

// This forces moment to start at specfic moment in time. If no point in time is provided.