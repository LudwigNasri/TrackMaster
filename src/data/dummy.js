

const DummyData = [
    {
      "userId": "U1001",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "+1234567891",
      "address": {
        "street": "101 First Ave",
        "city": "Helsinki",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "A123",
        "waypoints": [
          { "lat": 60.1695, "lng": 24.9354 },
          { "lat": 60.192, "lng": 24.945 }
        ],
        "status": "Delivered",
        "currentPosition": { "lat": 60.1695, "lng": 24.9354 },
        "eta": "2025-01-08T10:00:00Z"
      }
    },
    {
      "userId": "U1002",
      "name": "Bob Smith",
      "email": "bob@example.com",
      "phone": "+1234567892",
      "address": {
        "street": "202 Second St",
        "city": "Espoo",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "B456",
        "waypoints": [
          { "lat": 60.182, "lng": 24.921 },
          { "lat": 60.195, "lng": 24.952 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.182, "lng": 24.921 },
        "eta": "2025-01-09T12:00:00Z"
      }
    },
    {
      "userId": "U1003",
      "name": "Charlie Davis",
      "email": "charlie@example.com",
      "phone": "+1234567893",
      "address": {
        "street": "303 Third Rd",
        "city": "Vantaa",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "C789",
        "waypoints": [
          { "lat": 60.175, "lng": 24.900 },
          { "lat": 60.188, "lng": 24.940 }
        ],
        "status": "Pending",
        "currentPosition": { "lat": 60.175, "lng": 24.900 },
        "eta": "2025-01-10T14:30:00Z"
      }
    },
    {
      "userId": "U1004",
      "name": "Diana Green",
      "email": "diana@example.com",
      "phone": "+1234567894",
      "address": {
        "street": "404 Fourth Blvd",
        "city": "Tampere",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "D101",
        "waypoints": [
          { "lat": 60.160, "lng": 24.930 },
          { "lat": 60.185, "lng": 24.955 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.160, "lng": 24.930 },
        "eta": "2025-01-11T15:45:00Z"
      }
    },
    {
      "userId": "U1005",
      "name": "Ethan White",
      "email": "ethan@example.com",
      "phone": "+1234567895",
      "address": {
        "street": "505 Fifth St",
        "city": "Turku",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "E202",
        "waypoints": [
          { "lat": 60.172, "lng": 24.945 },
          { "lat": 60.198, "lng": 24.960 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.172, "lng": 24.945 },
        "eta": "2025-01-12T18:00:00Z"
      }
    },
    {
      "userId": "U1006",
      "name": "Fiona Black",
      "email": "fiona@example.com",
      "phone": "+1234567896",
      "address": {
        "street": "606 Sixth Ave",
        "city": "Oulu",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "F303",
        "waypoints": [
          { "lat": 60.185, "lng": 24.915 },
          { "lat": 60.195, "lng": 24.935 }
        ],
        "status": "Pending",
        "currentPosition": { "lat": 60.185, "lng": 24.915 },
        "eta": "2025-01-13T20:15:00Z"
      }
    },
    {
      "userId": "U1007",
      "name": "George Brown",
      "email": "george@example.com",
      "phone": "+1234567897",
      "address": {
        "street": "707 Seventh St",
        "city": "Jyväskylä",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "G404",
        "waypoints": [
          { "lat": 60.193, "lng": 24.926 },
          { "lat": 60.199, "lng": 24.942 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.193, "lng": 24.926 },
        "eta": "2025-01-14T22:30:00Z"
      }
    },
    {
      "userId": "U1008",
      "name": "Hannah Lewis",
      "email": "hannah@example.com",
      "phone": "+1234567898",
      "address": {
        "street": "808 Eighth Rd",
        "city": "Lahti",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "H505",
        "waypoints": [
          { "lat": 60.180, "lng": 24.920 },
          { "lat": 60.189, "lng": 24.950 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.180, "lng": 24.920 },
        "eta": "2025-01-15T23:45:00Z"
      }
    },
    {
      "userId": "U1009",
      "name": "Ian Walker",
      "email": "ian@example.com",
      "phone": "+1234567899",
      "address": {
        "street": "909 Ninth Ave",
        "city": "Kuopio",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "I606",
        "waypoints": [
          { "lat": 60.171, "lng": 24.940 },
          { "lat": 60.190, "lng": 24.955 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.171, "lng": 24.940 },
        "eta": "2025-01-16T08:00:00Z"
      }
    },
    {
      "userId": "U1010",
      "name": "Jack Adams",
      "email": "jack@example.com",
      "phone": "+1234567800",
      "address": {
        "street": "1010 Tenth St",
        "city": "Rovaniemi",
        "country": "Finland"
      },
      "trackingInfo": {
        "trackingNumber": "J707",
        "waypoints": [
          { "lat": 60.165, "lng": 24.928 },
          { "lat": 60.195, "lng": 24.965 }
        ],
        "status": "In Transit",
        "currentPosition": { "lat": 60.165, "lng": 24.928 },
        "eta": "2025-01-17T10:15:00Z"
      }
    }
  ]

export default DummyData;