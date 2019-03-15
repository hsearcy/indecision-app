pipeline {
  agent any
  stages {
    stage('Do Something') {
      steps {
        echo 'Yay!'
        nodejs('Node 8') {
          sh 'yarn add @gather/constants'
        }

      }
    }
    stage('Do Something Else') {
      steps {
        sh '''pwd
ls'''
      }
    }
  }
}