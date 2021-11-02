# Date Night App (DNA)

![README_Main](https://user-images.githubusercontent.com/87659547/139732956-300eb9db-0759-4c02-a95b-96da06ccdd96.png)

Link to Application - https://date-night-app.surge.sh/
<br>

# Technologies used:<br>
JavaScript, React js, CSS, Axios

# Approach
The Date Night App started with addressing a potential need for random ideas for drinks and meals. By offering suggestions, it is hoped that there will less stress in the planning of any date night. A wireframe of the app layout was completed as part of the planning process. In addition, all color scheme selections were made before starting any coding. 

![DNA_Wireframe](https://user-images.githubusercontent.com/87659547/139694621-458b9ce4-5044-461e-b24d-a94a346aefcf.png)

## User Stories
- As a user, I want to have an option for a random drink suggestion. 
- As a user, I want to have an option for a random meal suggestion. 
- As a user, I want to have an option for both random suggestions at once. 
- As a user, I want to see the different suggestions. 
- As a user, I want to see the recipe for the drink suggested. 
- As a user, I want to see the recipe for the meal suggested. 
- As a user, I to start all over again with new choices. 

# Main Features
- Main selection screen
- Random Drink show page
- Random Meal show page
- Random combination of drink and meal page
- Detailed view of drink recipe
- Detailed view of meal recipe

Drink detail example:
![README_DD](https://user-images.githubusercontent.com/87659547/139700945-f5adc890-9251-492e-99be-c62a3daa71a5.png)

Random Choice example:<br>
![README_Random](https://user-images.githubusercontent.com/87659547/139709144-8b93faf1-6bef-49fd-9088-a5b2efa8936c.png)

Favorite code snippet. This bit of filtering makes sure that there are no undesired results returned from object.
``` javascript

        const drink = props.drink;
	// listing all the [key,value] pairs of [drink] object.
	const drinkArray = Object.entries(drink);
	// filter new array for valid data
	const filteredDrinks = drinkArray.filter(
		([key, value]) =>
			value !== '' && value !== ' ' && value !== null && value !== undefined
	);
```




# Known Issues
- When you show a drink or meal page, the image will flash by two times before updating finally. It appears as though the state is being updated twice. 
- On initial app load, a double click is required to show the random item page. 

# Acknowledgements

- Logo designed on the free site: https://looka.com/logo-maker/

- Lookup a random cocktail - www.thecocktaildb.com/api/json/v1/1/random.php

- Lookup a single random meal - www.themealdb.com/api/json/v1/1/random.php

</br>
</br>
</br>
This website may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner. The material contained in this website is distributed without profit for research and educational purposes.
This should constitute a ‘fair use’ of any such copyrighted material (referenced and provided for in section 107 of the US Copyright Law).
If you wish to use any copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must obtain expressed permission from the copyright owner.
