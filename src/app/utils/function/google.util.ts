export function getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  
    const options = {
      redirect_uri: 'http://localhost:4201/api/v1/sessions/oauth/google',
      client_id:  '812371275421-dov24r49gr6rpr96hvn2qv7ki43d9rb0.apps.googleusercontent.com',
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };
  
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
  }
    