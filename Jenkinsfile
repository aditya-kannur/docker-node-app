pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github-creds', url: 'https://github.com/aditya-kannur/docker-node-app'
      }
    }

    stage('Build') {
      steps {
        echo 'Simulating Docker Build...'
        // sh 'docker build -t test-app .'
      }
    }

    stage('Test') {
      steps {
        echo 'Run test cases here...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying app...'
      }
    }
  }
}
