## ChatGPT Seeder

#### A powerful tool that leverages the capabilities of ChatGPT to automate the generation of realistic and meaningful data for your database seeding need.

### Features
- Easy data seeding
- Real/fake data options
- Flexible table selection
- Customizable record count
- Detailed column info
- Selective column insertion
- Auto select none nullable columns
- Contextual data description
- Preview data before insertion
- Data regeneration for accuracy
- API rate limit handling using retry count
- Seamless OpenAI API integration
- Customizable configuration
- Display API token usage
- User-friendly interface
- Try catch exception, both backend and frontend

### Requirements
- PHP 8.0 or higher
- Nova 4
- OpenAI API Key

### Installation

You can install the package into a Laravel app that uses Nova 4 via composer:

```bash
composer require naif/chatgpt-seeder
```

Publish the package's configuration file

```
php artisan vendor:publish --provider="Naif\ChatgptSeeder\ToolServiceProvider" 
```

Add the below to .env file:

```
CHATGPT_SEEDER_API_KEY= (OpenAI API Key)
CHATGPT_SEEDER_MAX_TOKENS=1000
CHATGPT_SEEDER_GENERATE_RETRY=3
```

### Usage

Add the tool to NovaServiceProvider.php

```
  public function tools()
    {
        return [
            new ChatgptSeeder()
        ];
    }
```

### Configuration

ChatGPT Seeder's configuration file, located at config/chatgpt-seeder.php\
Allows you to set and customize:

- ChatGPT API Key
- Maximum tokens to be used for each request (higher number yields longer data)
- Retry count: Refers to the tool's ability to retry the data request when the returned data is not valid. It will continue retrying until it reaches the maximum retry count, ensuring a valid and accurate result while avoiding too many API requests.


### Steps

1- Access ChatGPT Seeder Tool from the Laravel Nova dashboard.\
2- Fill in the required information, such as:
- Data type (Real or Fake)
- Table Name
- Number of Records
- Data Required Description
- Select any nullable columns.

3- Click the "Generate" button to initiate the data generation process.\
4- Data Preview will show up displaying the first 8 records.\
5- Click Proceed to insert data to table, or click on Regenerate again until you are satisfied with the result.

### Screenshots

<img src="screenshots/home.png" width="800">
<img src="screenshots/preview.png" width="800">

## Support:
naif@naif.io

https://naif.io

Bug Tracker:

https://github.com/naifalshaye/chatgpt-seeder/issues

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
