Markov character ngrams 4. source texts a description of large language models and The Book of Genesis.

First:

A table of next characters is made by

taking the  source texts  and looking at every four characters and making a table of the next letters that follow those four characters.

``` javascript

{code :  [' ', 'd', '.', ',', ' ', 'd', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']}
 
```


Second we pick a random starting point

and generated the text by looking at each four characters and adding one of the possibilities from the table.

1. **Choose your text:** Start by selecting a piece of text that you want to analyze and generate new text from. It could be a sentence, a paragraph, or a longer piece of writing.

2. **Divide the text into n-grams:** In this case, we'll use n-grams of four characters. Divide your text into consecutive four-character sequences. For example, if your text is "Hello, how are you?", the four-character n-grams would be "Hell," "ello," "llo,", "lo, ", "o, h", and so on.

4. **Calculate the probability of the next character:** For each unique four-character n-gram, calculate the probability of each possible character that follows it. Divide the frequency of each character by the total occurrences of that specific n-gram. This will give you the probability distribution for the next character. But I am just appending all next characters so we don't need to do math  here are the next possible characters for the ngram "code"

``` javascript

{code :  [' ', 'd', '.', ',', ' ', 'd', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']}
 
```

7. **Generate new text:** To generate new text, start with an initial four-character n-gram. Use the Markov chain to sample the next character based on its probability distribution. Append the chosen character to the generated text and slide the n-gram window by one character. Repeat this process, selecting the next character based on the probability distribution, until you have the desired length of generated text.

8. **Repeat and experiment:** You can repeat the generation process with different initial n-grams or adjust the probabilities to get different variations of the generated text.

By following these steps, you can analyze a text into Markov n-grams of four characters and generate new text based on the probability distribution of the next character. This approach allows you to create text that mimics the patterns and style of the original text.
