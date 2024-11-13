# JWT Token Generator for Supabase Service Role

This is a simple Node.js script that generates a JWT token for Supabase service or anon role with a defined expiration date.

## Prerequisites

- Node.js installed on your machine
- Supabase project with service role API key

## Installation

1. Clone this repository or download the script file.
2. Install dependencies by running `npm install` in the project directory.

## Usage

1. Set the `SUPABASE_JWT_SECRET` environment variable to your Supabase service role API key.
2. Run the script with `node index.js`.
3. The generated token will be printed to the console.

## Configuration

The script uses the following configuration:

- `role`: set to `service_role` or `anon`
- `iss`: set to `supabase`
- `expiresIn`: set to `1d` (1 day)

You can modify these values in the `payload` and `options` objects to suit your needs.

## Resources

- [Supabase Documentation](https://supabase.com/docs/guides/self-hosting/docker)

## License

This script is released under the MIT License. See the [LICENSE](LICENSE) file for details.