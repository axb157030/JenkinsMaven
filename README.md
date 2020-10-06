# JenkinsMaven
Maven project to help learn Jenkins.

## Running tests on Jenkins
* [Install Jenkins](https://www.youtube.com/watch?v=1y8RsUbxtAw&t=382s).
  * To install Jenkins. I downloaded it from this [link] (https://www.jenkins.io/download/)
  * The Jenkins that I installed required a different JDK than the onw I had. I downloaded OpenJDK from [RedHat](https://developers.redhat.com/products/openjdk/download)
# Make Maven Project in Jenkins
### `Set up Maven in Jenkins`
* Log onto Jenkins
* Click on Manage Jenkins
* Click on Manage Plugins
* Download and install Unleash Maven Plugin if it has not already been installed
* Download and install [Maven](https://maven.apache.org/download.cgi). If you are using a Windows Computer please download the Binary tar.gz file.
* Extract apache-maven-X.X.X. These 'X's can be any number. They tell the version of maven installed. For me it was 3.6.3 from Binary tar.gz. I used `7zip` to do this. 
* Click on Manage Jenkins again
* Click on Global Tool Configuration
* Add Maven
 * I unchecked Install Automatically and instead directly specified the path to the file, apache-maven-3.6.3, which I extracted from the Maven Binary rar.gz file.
### `Make Maven Project` 
* You can learn how to do that [here] (https://www.youtube.com/watch?v=BfJvxGs-HxQ&t=317s) and [here] (https://www.youtube.com/watch?v=pwP9zimYec4&t=522s)
* Go to your home page in Jenkins. You can do that by clicking Jenkins at around the top left corner of screen
* Click New Item
* Enter your item name and click Maven Project. Please then click ok.
* Check GitHub Project. For the project url type or paste https://github.com/axb157030/JenkinsMaven.git/ or whichever the url is for this git repository.
* For Source Code Management Click the radio button near Git. 
 * For the Repository Url, type or paste https://github.com/axb157030/JenkinsMaven.git/ or whichever the url is for this git repository.
 * For the Branch Specifier, type or past */main
* For the Build Triggers check 'Build whenever a SNAPSHOT dependency is built' and 'GitHub hook trigger for GITScm polling'
* For the build environment please check Delete workspace before build starts
* For the Build, type or paste pom.xml for the Root POM, and for goals and options type clean test.

* Click Save
##
I hope this helps

