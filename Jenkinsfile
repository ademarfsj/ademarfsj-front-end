pipeline {
    agent { dockerfile true }
    stages {

        stage('Tag Image') {
            steps {
                Image.tag(['ademarfsj/front-end:${env.BUILD_ID}', 'ademarfsj/front-end:latest'])
            }
        }

        stage('Push Image') {
            steps {
                Image.push(['ademarfsj/front-end:${env.BUILD_ID}', 'ademarfsj/front-end:latest'])
            }
        }

    }
}