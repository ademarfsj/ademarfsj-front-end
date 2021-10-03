pipeline {
    agent { docker { image 'node:14' } }
    stages {

        stage('Install') {
            steps { sh 'npm install' }
        }

        stage('Build') {
            steps {
                sh 'npm run-script build'
            }
        }

        stage('Create Image') {
            steps {
                docker.build("my-image:0.${env.BUILD_ID}")
            }
        }

    }
}