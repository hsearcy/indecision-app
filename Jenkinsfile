pipeline {
  agent any
  stages {
    stage('Do Something') {
      agent {
        node {
          label 'Node 8'
        }

      }
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