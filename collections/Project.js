Projects = new Mongo.Collection('projects');

Projects.allow({
    insert: function(userId, doc) {
        // true if userId exists
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Schemas.Wage = new SimpleSchema({
    cost: {
        type: Number,
        decimal: true,
        label: 'Cost'
    },
    type: {
        type: String,
        label: 'Wage Type'
    }
});

Schemas.SkillRequirement = new SimpleSchema({
    skill: {
        type: String,
        label: 'Skill'
    },
    isRequired: {
        type: Boolean,
        label: 'Is Required'
    }
});

Schemas.ParticipantRequirement = new SimpleSchema({
    skillRequirements: {
        type: [Schemas.SkillRequirement],
        defaultValue: [],
        label: 'Skill Requirements'
    },
    minReviewCount: {
        type: Number,
        defaultValue: 0,
        label: 'Minimal Review Count'
    },
    minStarRating: {
        type: Number,
        defaultValue: 0,
        label: 'Minimal Star Rating'
    }
});

Schemas.ExpectedTimeSpan = new SimpleSchema({
    length: {
        type: Number,
        label: 'Length'
    },
    type: {
        type: String,
        label: 'Type'
    }
});

Schemas.Project = new SimpleSchema({
    _id: {
        type: String,
        label: 'Id'
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (!this.value) return new Date();
        },
        label: 'Created At'
    },
    owner: {
        type: String,
        label: 'Owner'
    },
    participants: {
        type: [String],
        defaultValue: [],
        label: 'Participants'
    },
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    expectedTimeSpan: {
        type: Schemas.ExpectedTimeSpan,
        optional: true,
        label: 'Expected Time Span'
    },
    isProfit: {
        type: Boolean,
        label: 'Is For Profit'
    },
    wage: {
        type: Schemas.Wage,
        optional: true,
        label: 'Wage'
    },
    participantRequirements: {
        type: [Schemas.ParticipantRequirement],
        defaultValue: [],
        label: 'Participant Requirements'
    }
});

Projects.attachSchema(Schemas.Project);



Meteor.methods({
    addProject: function(obj, callback) {
        obj.owner = this.userId;
        Feedbacks.insert(obj, callback);
    },
    updateProject: function(obj, callback) {
        let id = obj._id;
        delete obj._id;
        Projects.update({_id: id}, {$set: obj}, callback);
    },
    deleteProject: function(id) {
        Projects.remove(id);
    }
})