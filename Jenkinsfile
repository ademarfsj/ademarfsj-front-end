pipeline {
    agent { dockerfile { additionalBuildArgs '--tag ademarfsj/front-end:latest' } }
    stages {

        stage('Test') {
            steps {
                sh 'echo Ok!'
            }
        }

    }
}