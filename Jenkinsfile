pipeline {
    agent { docker { image 'node:14' } }
    stages {

        stage('Install') {
            steps { sh 'npm install' }
        }

        stage('build') {
            steps {
                sh 'ng build'
            }
        }

    }
}