Scopul proiectului:
    Calcularea salariului net si a taxelor pe baza salariului brut

Mod de calcul:
    Salariul net = Salariul brut - CAS - CASS
    Asigurari Sociale (CAS) = 0.25 * Salariul brut
    Asigurari Sociale de Sanatate (CASS) = 0.10 * Salariul brut

###################################################

Task-uri:

1. Adaugare eveniment de click pe butonul "Calculeaza"  
2. Validare suma adaugata in input:
    - sa nu fie empty
    - valoarea sa sa fie mai mare decat 0
    - sa fie un numar intreg 
3. Calculare taxe (CAS, CASS)
4. Calculare salariul net
5. Afisare salariul brut, CAS, CASS si salariul net in interfata
6. Afisare diagrama cu salariul net si taxe

###################################################

Functionalitati noi:

1. Calcularea taxelor platite de angajator catre stat
    - Contributie Asiguratorie pentru Munca (CAM) = 2.25% din salariul brut

2. La diagrama sa ai posibilitatea de a vedea procentele sau sumele de bani.

3. Calcularea salariului net si pentru cei care nu sunt scutiti de impozitul pe venit (checkbox daca persoana este sau nu scutita)
    - Calculare Deducere personala (DP)
    - Calculare Impozit pe venit (Impozit venit = 0.10 * (salariul brut - CAS - CASS - DP))

4. Posibilitatea de a introduce / afisa sumele in mai multe monede ex: Euro, Dolar etc (Folosire API pentru conversie in timp real - https://exchangeratesapi.io/)