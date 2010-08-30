var activities_fixture = {
  "/type/topic": {
    "name": "Topic",
    "type": "type",
    "properties": {
      "title": {
        "name": "Topic Name",
        "unique": true,
        "expected_type": "string"
      },
      "activities": {
        "name": "Activities",
        "unique": false,
        "expected_type": "/dc/activity"
      },
      "created_at": {
        "name": "Created at",
        "unique": true,
        "expected_type": "datetime"
      },
      "last_activity": {
        "name": "Entity",
        "unique": true,
        "expected_type": "datetime"
      },
      "user": {
        "name": "User",
        "unique": true,
        "expected_type": "/type/user"
      }
    }
  },
  "/type/activity": {
    "type": "type",
    "name": "Activity",
    "properties": {
      "excerpt": {
        "name": "Excerpt",
        "unique": true,
        "expected_type": "string"
      },
      "score": {
        "name": "Activity Score",
        "unique": true,
        "expected_type": "number"
      },
      "created_at": {
        "name": "Created at",
        "unique": true,
        "expected_type": "datetime"
      },
      "user": {
        "name": "User",
        "unique": false,
        "expected_type": "/type/user"
      }
    }
  },
  "/type/user": {
    "type": "type",
    "name": "User",
    "properties": {
      "name": {
        "name": "User Name",
        "unique": true,
        "expected_type": "string"
      },
      "topics": {
        "name": "Topics",
        "unique": false,
        "expected_type": "/type/topic"
      },
      "activities": {
        "name": "Activities",
        "unique": false,
        "expected_type": "/type/activity"
      },
      "score": {
        "name": "User Score",
        "unique": true,
        "expected_type": "number"
      }
    }
  },
  "/user/1": {
    "type": "/type/user",
    "properties": {
      "name": "Dubrider",
      "activities": ["/activity/1"],
      "topics": ["/topic/1"],
      "score": "15.0"
    }
  },
  "/topic/1": {
    "type": "/type/topic",
    "properties": {
      "title": "Zive.at launched",
      "activities": ["/activity/1"],
      "last_activity": "2123127812",
      "user": "/user/1"
    }
  },
  "/activity/1": {
    "type": "/type/activity",
    "properties": {
      "excerpt": "Blablabla....",
      "score": "12",
      "created_at": "20928342",
      "user": "/user/1"
    }
  }
};