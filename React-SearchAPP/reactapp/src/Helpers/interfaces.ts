export interface ArticleObj {
    url: string;
    urlToImage: string;
    title: string;
};

export interface ArticleProps {
    art: ArticleObj;
    key: string;
}

export interface RegisterFormData {
    email: string;
    password: string;
    password2: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface NavbarProps {
    loggedIn: boolean,
}