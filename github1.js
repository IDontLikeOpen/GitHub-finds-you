class GitHub {
    constructor() {
        this.client_id = '7565e308f301585d99c8';
        this.client_secret ='9a6508358580ad5367189591f30aeb8b58f3c04a';
        this.repos_count=5;
        this.repos_sort = 'creates: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}?repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json(); // AUTOMATIC JSON.PARSE FO SHO
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}