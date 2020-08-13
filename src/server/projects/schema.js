const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    name: {
        type: String,
        text: true
    },
    description: {
        type: String,
        text: true
    },
    tools: [
        {
            name: {
                type: String,
                text: true
            },
            link: {
                type: String,
                text: true
            }
        }
    ],
    github: {
        type: String,
        text: true
    },
    github_badges_last_commit: {
        type: String,
        text: true
    },
    github_badges_language_count: {
        type: String,
        text: true
    },
    github_badges_top_language: {
        type: String,
        text: true
    },
    github_badges_forks: {
        type: String,
        text: true
    },
    medium: {
        type: String,
        text: true        
    },
    playstore: {
        type: String,
        text: true
    },
    hasGithub: {
        type: Boolean
    },
    hasMedium: {
        type: Boolean
    },
    hasPlaystore: {
        type: Boolean
    }
})
module.exports = mongoose.model("Projects", schema);
