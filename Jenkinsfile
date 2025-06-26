pipeline {
  agent any

  environment {
    MONGO_URI = credentials('MONGO_URI')
  }

  stages {
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t node-app .'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker run -d -p 3000:3000 --env MONGO_URI=$MONGO_URI node-app'
      }
    }
  }
}
