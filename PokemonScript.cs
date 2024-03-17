using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pokemon : MonoBehaviour
{
    // Variables accessible in the Inspector
    [SerializeField] private string pokemonName;
    [SerializeField] private int baseHealth;
    [SerializeField] private int currentHealth;
    [SerializeField] private int attack;
    [SerializeField] private int defense;
    [SerializeField] private int statPoints;
    [SerializeField] private float weight;
    [SerializeField] private PokemonType[] types;
    [SerializeField] private PokemonType[] weaknesses;
    [SerializeField] private PokemonType[] resistances;

    // Function to display each information of the Pokemon in the console
    private void Display()
    {
        Debug.Log("Pokemon Name: " + pokemonName);
        Debug.Log("Base Health: " + baseHealth);
        Debug.Log("Current Health: " + currentHealth);
        Debug.Log("Attack: " + attack);
        Debug.Log("Defense: " + defense);
        Debug.Log("Stat Points: " + statPoints);
        Debug.Log("Weight: " + weight);
        Debug.Log("Types: " + string.Join(", ", types));
        Debug.Log("Weaknesses: " + string.Join(", ", weaknesses));
        Debug.Log("Resistances: " + string.Join(", ", resistances));
    }

    // Function to initialize the current health of the Pokemon
    private void InitCurrentLife()
    {
        currentHealth = baseHealth;
    }

    // Function to initialize the stat points of the Pokemon
    private void InitStatsPoints()
    {
        statPoints = baseHealth + attack + defense;
    }

    // Function to get the attack damage of the Pokemon
    private int GetAttackDamage()
    {
        // Implement the logic to calculate attack damage here
        return attack;
    }

    // Function to apply damage to the Pokemon based on the enemy's type
    private void TakeDamage(int damage, PokemonType enemyType)
    {
        if (damage <= 0)
        {
            Debug.Log("No damage taken!");
            return;
        }

        float damageMultiplier = 1f;

        if (IsWeakAgainst(enemyType))
        {
            damageMultiplier = 2f;
        }
        else if (IsResistantAgainst(enemyType))
        {
            damageMultiplier = 0.5f;
        }

        int finalDamage = Mathf.RoundToInt(damage * damageMultiplier);
        currentHealth -= finalDamage;

        Debug.Log("Current Health after attack: " + currentHealth);
    }

    // Function to check if the Pokemon is weak against a specific type
    private bool IsWeakAgainst(PokemonType type)
    {
        foreach (PokemonType weakness in weaknesses)
        {
            if (weakness == type)
            {
                return true;
            }
        }
        return false;
    }

    // Function to check if the Pokemon is resistant against a specific type
    private bool IsResistantAgainst(PokemonType type)
    {
        foreach (PokemonType resistance in resistances)
        {
            if (resistance == type)
            {
                return true;
            }
        }
        return false;
    }

    // Function to check the health status of the Pokemon
    private void CheckIfPokemonAlive()
    {
        if (currentHealth <= 0)
        {
            Debug.Log("Pokemon is fainted!");
        }
        else
        {
            Debug.Log("Pokemon is still alive!");
        }
    }

    // Start is called before the first frame update
    private void Start()
    {
        Display();
        InitCurrentLife();
        InitStatsPoints();
        int damage = GetAttackDamage();
        Debug.Log("Attack Damage: " + damage);

        int enemyDamage = 20; // Example value
        PokemonType enemyType = PokemonType.Fire; // Example value
        TakeDamage(enemyDamage, enemyType);

        CheckIfPokemonAlive();
    }
}

public enum PokemonType
{
    Normal,
    Fire,
    Water,
    Grass,
    Electric,
    Rock
}