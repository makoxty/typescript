export {};

// indexシグネチャはよくわからない

interface Profile {
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: '', underTwenty: false};

profile.name = 'test';
profile.age = 44;
profile.year = 2022;

console.log(profile);