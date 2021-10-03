pipeline {
    agent { dockerfile { additionalBuildArgs '--tag ademarfsj/ademarfsj-front-end:latest' } }
    stages {

        stage('Test') {
            steps {
                sh 'node --version'
            }
        }

    }
}