pipeline {
    
    agent any
    
    tools {
        maven 'Maven 3.6.3'
        jdk 'java-1.8.0-openjdk'
    }

    stages {
        stage('clone repo and clean') { 
            steps {
                bat "git clone https://github.com/axb157030/JenkinsMaven.git"
                bat "mvn clean -f JenkinsMaven"
            }
        }
        stage('Test') { 
            steps {
                bat "mvn test -f JenkinsMaven"
            }
        }
        stage('Deploy') { 
            steps {
                bat "mvn package -f JenkinsMaven"
            }
        }
    }
}
