# Git Training

### what is Git?

Git is a Version Control System, Code Storage(Store your code remotely) and platform for collboration between developers.

### Why Git

It is easy to use tool, developers can collaborate easily, aloows offline work.
We can easily go back to the previus version if we make any mistack or break the code.

### Other alternative
- TFS Team foundation server
```
Its a product offered by microsoft
```

## HTTPS/SSH

There are two different types of connection to the remote
- HTTPS
- SSH Secure Shell



##Commands
### Initialization

```
git init
```
- it initialize local repository as a git repository.


### Status
```
git status
```
- It gives the innfo of new files added deleted or updated.


### Adding files to repository
Syntax
```
git add <Filename>
```
Example
```
git add readme.md
```
- This git command will add the files specified into repository if we add . as filename then it will add all new files and upadte files not present in git ignore file


### Connecting local repository.
Syntax
```
git remote add <repo local name> "URL of the repository"
```
Example
```
git remote add origin "https://github.com/praveenrebase/training.git"
```
- This command will make the local machine as remote


### Committing locally
Syntax
```
git commit -m "Commit Message"
```
Example
```
git commit -m "New Feature added"
```
- This command will commit the changes locally


### push the commit on git repository
Syntax
```
git push -u <local repo name> <remote branch>
```
Eample
```
git push -u origin main
```

### Git pull command
```
git pull 
```
- Fetches files form remote server


### Git Configuration
Syntax
```
git config <Setting> <value>
```
Example
```
git config user.name "Praveen Prajapati"
```
- this git command allows us to configure different this required for git like username and emailid


```
