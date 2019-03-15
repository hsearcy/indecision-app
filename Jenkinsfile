pipeline {
  agent any
  stages {
    stage('Do Something') {
      steps {
        echo 'Yay!'
        sh 'yarn add @gather/constants'
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