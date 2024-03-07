pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('build') {
            steps {
                echo "Build the code using docker build image"
                sh "docker build -t node:mongo ."
                echo "Build Completed"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploy the build using docker run"
                sh "docker-compose down && docker-compose up -d"
                echo 'Deployed Successfully on port 5000'
            }
        }
        
    }
}
