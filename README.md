# FunctionCI Demo Project
See: https://github.com/rgfindl/functionci

# Setup
## Prerequisites
- Register your domain with Route53
- Or point your existing domain to Route53
- Configure 'admin@yourdomain.com' to receive the SSL verification email
  - You will have to confirm this email address.  This is annoying and I've asked AWS to remove this step if the domain is used with Route53.

## Stack Up
- Replace 'example.com' in _cim.yml with your domain name.
- Run `cim stack-up`

Now you can use your FunctionCI builds to deploy to this Lambda.
