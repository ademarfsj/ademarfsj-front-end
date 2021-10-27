pipeline {
    environment {
        imagename = 'ademarfsj/front-end'
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    
    agent any
    stages {

        stage('Build image') {
            steps {
                script {
                    dockerImage = docker.build imagename
                }
            }
        }

        stage('Deploy Image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push("0.$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }
                }
            }
        }

    }
}