<!--
Format. A "# Topic" line starts a topic; the lines after it, up to the first "## ...", are the
topic's story (read, not quizzed). A "## Title" line starts an entry, which can be one paper or a
series. Inside an entry, a line beginning with one of these labels starts a slot:

  Papers:      list of citations, one "- " line each
  Question:    what the paper asks
  Setting:     primitives, in a line or two
  Result:      the statement, with the quantifiers
  Work:        what does the work (the assumption or structure the result hinges on)
  Proof:       the proof idea
  Matters:     why it matters, what it changed
  Connections: "- " lines; [[Entry title]] links to another entry
  Notes:       anything else
  Years:       optional; the year or span shown in the topic list (default: the first paper's year)

Slots end at the next label or the next heading. Blank lines separate paragraphs, "- " lines make
lists, *text* is italic, $...$ and $$...$$ are LaTeX (KaTeX). Entries are shown in file order.
-->

# General equilibrium

Walras wrote the system down and counted equations; the twentieth-century program made it rigorous and then found its limits. Existence (Arrow–Debreu and McKenzie, 1954) settled that the equations are consistent, by restating equilibrium as a fixed point. Radner (1972) recast equilibrium for markets that reopen over time and across states, with correct price expectations in place of a complete set of contingent claims, which is where incomplete markets begin. On dynamics, the Walrasian tâtonnement converges under gross substitutes (Arrow–Hurwicz 1958, Arrow–Block–Hurwicz 1959); Scarf (1960) showed prices cycling forever in a three-good economy; and Sonnenschein, Mantel and Debreu (1972–74) showed why no general stability or uniqueness theorem was ever possible, since individual rationality puts nothing on aggregate excess demand beyond continuity, homogeneity and Walras' law.

## Existence of competitive equilibrium

Papers:
- Arrow, K. J. and G. Debreu (1954), "Existence of an Equilibrium for a Competitive Economy," *Econometrica* 22(3), 265–290.
- McKenzie, L. W. (1954), "On Equilibrium in Graham's Model of World Trade and Other Competitive Systems," *Econometrica* 22(2), 147–161. Independent, same volume.
- McKenzie, L. W. (1959), "On the Existence of General Equilibrium for a Competitive Market," *Econometrica* 27(1), 54–71. Irreducibility in place of the survival assumption.
- Debreu, G. (1952), "A Social Equilibrium Existence Theorem," *PNAS* 38(10), 886–893. The fixed-point tool.
- Debreu, G. (1959), *Theory of Value*, ch. 5. The textbook form; ch. 7 adds time and uncertainty through contingent commodities.

Question: Walras counted equations and unknowns. Is there actually a price vector at which every consumer and every firm optimizes and all markets clear at once?

Setting: $L$ goods. Consumers $i=1,\dots,I$ with consumption sets $X_i\subset\mathbb{R}^L$, preferences $\succsim_i$, endowments $\omega_i$ and shares $\theta_{ij}$ of firms $j=1,\dots,J$ with production sets $Y_j\subset\mathbb{R}^L$. A competitive equilibrium is $(p,(x_i),(y_j))$ with $p\ne 0$ such that each $y_j$ maximizes $p\cdot y$ on $Y_j$, each $x_i$ is $\succsim_i$-maximal in the budget set $\{x\in X_i: p\cdot x\le p\cdot\omega_i+\sum_j\theta_{ij}\,p\cdot y_j\}$, and $\sum_i x_i\le\sum_i\omega_i+\sum_j y_j$ with $p_l=0$ for any good in excess supply.

Arrow–Debreu assumptions. $X_i$ closed, convex, bounded below. $\succsim_i$ complete, transitive, continuous, nonsatiated, and convex in the form $x'\succ_i x$ implies $tx'+(1-t)x\succ_i x$ for $t\in(0,1)$. $Y_j$ closed, convex, $0\in Y_j$; the aggregate $Y=\sum_j Y_j$ satisfies $Y\cap\mathbb{R}^L_+=\{0\}$ (no free lunch), $Y\cap(-Y)=\{0\}$ (irreversibility) and $-\mathbb{R}^L_+\subset Y$ (free disposal). A survival condition giving every consumer positive wealth at every price: $\omega_i$ in the interior of $X_i$, or each consumer can supply a kind of labor that is always demanded. McKenzie (1959) replaces survival by irreducibility of the economy.

Result: Under these assumptions a competitive equilibrium exists.

Work: Two things. Convexity of preferences and of technology makes the best-response correspondences convex valued, which is what a Kakutani argument needs; drop it and only approximate or large-economy versions survive (Starr 1969, Aumann 1966). The survival condition makes the budget correspondence continuous at prices where some consumer's wealth would otherwise reach zero; this is the delicate step and the one McKenzie's irreducibility is designed to weaken. Closedness, boundedness below, no free lunch and irreversibility are bookkeeping for compactness.

Proof: Arrow–Debreu's route. (1) No free lunch and irreversibility bound the set of feasible allocations; truncate each $X_i$ and $Y_j$ to a cube containing it. (2) Form an abstract economy, a game in which each player's feasible set depends on the others' choices: consumers choose $x_i$ in the truncated budget set, firms choose $y_j$ to maximize profit, and a fictitious price player chooses $p$ in the simplex to maximize the value of excess demand $p\cdot(\sum_i x_i-\sum_i\omega_i-\sum_j y_j)$. (3) Survival gives continuity of the budget correspondence, convexity gives convex-valued best responses, and Debreu's (1952) social equilibrium theorem, which is Kakutani applied to the product of the best-response correspondences, gives a fixed point. (4) At the fixed point budgets bind by nonsatiation, so Walras' law holds; combined with the price player's maximization this forces excess demand $\le 0$ in every good, with $p_l=0$ where it is strict. (5) The chosen points lie inside the cube, so the truncation does not bind.

Debreu's (1959) route. Define the aggregate excess demand correspondence $z(p)$ on the price simplex; show it is nonempty, convex and compact valued, upper hemicontinuous, bounded below, with $p\cdot z\le 0$ for every $z\in z(p)$; then apply the Gale–Nikaido–Debreu lemma: such a $z$ has a $p^*$ with $z(p^*)\cap(-\mathbb{R}^L_+)\ne\emptyset$. The lemma is itself Kakutani applied to $z$ paired with the price player.

Matters: It established that the Walrasian system is consistent under general conditions, which Wald (1936) had shown only in special cases. More durably it fixed the method, equilibrium as a fixed point of a best-response map (borrowed from Nash 1950), and the model, the Arrow–Debreu economy, which absorbs time and uncertainty through contingent commodities at no extra cost. It also makes clear what existence does not deliver: nothing on uniqueness, stability or comparative statics, which is where the rest of this topic goes.

Connections:
- [[Radner equilibrium]] is the existence question again once contingent-claims markets are replaced by sequential spot and asset markets.
- [[Tâtonnement and stability]] and [[Scarf cycles]] ask whether the equilibrium whose existence is proved here is reached by price adjustment.
- [[Sonnenschein–Mantel–Debreu]] shows that the properties of excess demand used here are essentially all it has.
- Nash (1950) is the methodological source; Debreu (1952) generalizes Nash to abstract economies.
- Mas-Colell (1974) and Shafer–Sonnenschein (1975) drop completeness and transitivity; Aumann (1966) drops convexity with a continuum of agents; Starr (1969) bounds the error from nonconvexity in large finite economies.
- Scarf (1973) turned the fixed-point argument into an algorithm for computing equilibria.

## Radner equilibrium

Papers:
- Radner, R. (1972), "Existence of Equilibrium of Plans, Prices, and Price Expectations in a Sequence of Markets," *Econometrica* 40(2), 289–303.
- Arrow, K. J. (1953, English 1964), "The Role of Securities in the Optimal Allocation of Risk-bearing," *Review of Economic Studies* 31(2), 91–96. The insight the model formalizes.
- Radner, R. (1968), "Competitive Equilibrium under Uncertainty," *Econometrica* 36(1), 31–58. Arrow–Debreu with differential information, and why a once-and-for-all market is the wrong model.
- Hart, O. (1975), "On the Optimality of Equilibrium when the Market Structure is Incomplete," *Journal of Economic Theory* 11(3), 418–443. What goes wrong without Radner's bound.

Question: When markets reopen over time and across states, and agents trade a limited set of assets rather than a complete set of date-event contingent claims at the start, what is the equilibrium concept, and does it exist?

Setting: Two dates. At date 1 one of $S$ states occurs. $L$ spot goods at date 0 and in each state, with spot prices $p_0$ and $p_s$. $J$ assets traded at date 0 at prices $q\in\mathbb{R}^J$; asset $j$ delivers the bundle $a_{js}\in\mathbb{R}^L$ in state $s$ (Radner's contracts for future delivery of goods are real assets). Consumer $i$ with endowments $(\omega_{i0},(\omega_{is})_s)$ chooses a plan, consumption $x_{i0}$ and $(x_{is})_s$ and a portfolio $\theta_i\in\mathbb{R}^J$, to maximize $u_i(x_{i0},x_{i1},\dots,x_{iS})$ subject to a budget constraint at every date-event:
$$p_0\cdot x_{i0}+q\cdot\theta_i\le p_0\cdot\omega_{i0},\qquad p_s\cdot x_{is}\le p_s\cdot\omega_{is}+\sum_j\theta_{ij}\,p_s\cdot a_{js}\ \text{ for each } s.$$
The date-1 prices in the constraints are the consumer's expectations.

An equilibrium of plans, prices and price expectations is $(q,p_0,(p_s)_s,(x_i,\theta_i)_i)$ such that every plan is optimal at these prices, all consumers hold the same expectations $(p_s)_s$, and the expectations are correct: $\sum_i\theta_i=0$, $\sum_i x_{i0}=\sum_i\omega_{i0}$, and $\sum_i x_{is}=\sum_i\omega_{is}$ for every $s$. The anticipated spot prices are the ones that clear the spot markets in each state.

Result: Under standard assumptions on preferences and endowments, together with an a priori bound on each consumer's position in every asset, an equilibrium of plans, prices and price expectations exists. When the assets span all states, meaning the $S\times J$ matrix of payoff values $[\,p_s\cdot a_{js}\,]$ has rank $S$, the equilibrium allocations are exactly the Arrow–Debreu allocations of the contingent-claims economy. With fewer independent assets they generally are not, and are generically not even constrained Pareto efficient (Hart 1975; Geanakoplos–Polemarchakis 1986).

Work: Correct common expectations. They close the model: once every agent anticipates the same spot prices and those are the prices that will clear the spot markets, the sequence of markets is a single simultaneous system to which fixed-point methods apply. The second thing is the bound on asset positions, and it is not cosmetic. Hart (1975) showed that with real assets the set of state-contingent transfers a portfolio can achieve depends on spot prices and can drop rank at some price vectors, so the budget correspondence is discontinuous there and without the bound equilibrium can fail to exist.

Proof: With bounded positions each consumer's choice set is compact and the budget correspondence is continuous in all prices (asset prices, date-0 spot prices and the spot prices of every state), so demand is upper hemicontinuous and convex valued. Treat the asset market and each date-event spot market as a market with its own price player and apply the abstract-economy fixed-point argument of [[Existence of competitive equilibrium]]. A fixed point clears every market at plans that are optimal under the common expectations, which is the definition. The step that fails without the bound is continuity of the budget correspondence, for the rank reason above; Duffie and Shafer (1985) later recovered existence for generic endowments and payoffs by treating the asset span, a point of a Grassmannian, as the equilibrium variable.

Matters: It is the equilibrium concept for sequential trade under uncertainty, so it is the foundation of general equilibrium with incomplete markets and of general-equilibrium asset pricing. It makes precise Arrow's (1953) observation that $S$ securities plus spot markets reproduce the full Arrow–Debreu outcome with far fewer markets. And it locates where the welfare theorems stop: with incomplete markets equilibrium exists but is not efficient, not even in the constrained sense, and opening a new market can make everyone worse off (Hart 1975).

Connections:
- [[Existence of competitive equilibrium]] supplies the fixed-point machinery and the contingent-commodity benchmark (Debreu 1959, ch. 7).
- [[Arrow–Debreu contingent claims]] (Arrow 1953) is the complete-markets special case; Radner (1968) is the differential-information extension of Arrow–Debreu that shows why sequential markets are needed.
- Hart (1975): nonexistence without the bound, and Pareto-ranked equilibria.
- Duffie–Shafer (1985): generic existence for GEI. Cass (1984): existence with nominal assets, whose span does not depend on prices.
- Geanakoplos–Polemarchakis (1986): generic constrained suboptimality.
- Radner (1979): rational expectations equilibrium, where prices also carry information.
- Magill–Quinzii (1996), *Theory of Incomplete Markets*, is the book.

## Tâtonnement and stability

Years: 1941–59

Papers:
- Samuelson, P. A. (1941), "The Stability of Equilibrium: Comparative Statics and Dynamics," *Econometrica* 9(2), 97–120. The dynamic formulation and the correspondence principle.
- Arrow, K. J. and L. Hurwicz (1958), "On the Stability of the Competitive Equilibrium, I," *Econometrica* 26(4), 522–552.
- Arrow, K. J., H. D. Block and L. Hurwicz (1959), "On the Stability of the Competitive Equilibrium, II," *Econometrica* 27(1), 82–109.
- Hahn, F. (1958), "Gross Substitutes and the Dynamic Stability of General Equilibrium," *Econometrica* 26(1), 169–170; Negishi, T. (1958), "A Note on the Stability of an Economy where All Goods are Gross Substitutes," *Econometrica* 26(3), 445–447.
- Negishi, T. (1962), "The Stability of a Competitive Economy: A Survey Article," *Econometrica* 30(4), 635–669.

Question: Does the Walrasian auctioneer's rule, raise the price of a good in excess demand and lower it in excess supply with no trade until equilibrium, lead to equilibrium, and under what conditions on the economy?

Setting: Exchange economy with aggregate excess demand $z:\mathbb{R}^L_{++}\to\mathbb{R}^L$, continuous, homogeneous of degree zero, satisfying Walras' law $p\cdot z(p)=0$. Tâtonnement: $\dot p_l=k_l\,z_l(p)$ with speeds $k_l>0$; Samuelson's general form is $\dot p_l=H_l(z_l(p))$ with $H_l$ sign preserving. Equilibrium: $z(p^*)=0$. Local stability: paths starting near the equilibrium ray converge to it. Global stability: paths from every $p(0)\gg 0$ converge to an equilibrium. Gross substitutes: $\partial z_l/\partial p_k>0$ for all $k\ne l$, which with homogeneity gives $\partial z_l/\partial p_l<0$.

Result: Across the two Arrow–Hurwicz papers. If every good is a gross substitute for every other, the equilibrium is unique up to scale and the tâtonnement is globally stable: from any $p(0)\gg 0$ the path converges to the equilibrium ray. The general principle behind it is that global stability holds whenever $p^*\cdot z(p)>0$ for every non-equilibrium $p$, the weak axiom holding for aggregate excess demand against the equilibrium price; diagonal dominance of the Jacobian is another sufficient condition. Local stability under gross substitutes and stability with two goods are the earlier, easier cases.

Work: Gross substitutes. It restricts income effects enough that aggregate excess demand behaves like one consumer's: the good whose price is highest relative to $p^*$ is in excess supply and the lowest in excess demand, so the spread of relative prices shrinks. The weak-axiom condition $p^*\cdot z(p)>0$ is the general form of the same thing. Doing quieter work is the fiction of no trade out of equilibrium, which is what keeps $z$ a fixed function of $p$ along the path.

Proof: Two arguments. (a) Lyapunov. Walras' law makes $\sum_l p_l^2/k_l$ constant along $\dot p_l=k_l z_l(p)$; let $p^*$ be the equilibrium on the ray with the same value of it and set $V(p)=\sum_l(p_l-p^*_l)^2/k_l$. Then $\dot V=2\sum_l(p_l-p^*_l)z_l(p)=2\,[p\cdot z(p)-p^*\cdot z(p)]=-2\,p^*\cdot z(p)<0$ off equilibrium, so $p(t)\to p^*$. (b) Ratio spread under gross substitutes. Let good $k$ attain $\max_l p_l/p^*_l$ and scale $p^*$ so that $p_k=p^*_k$ and $p_l\le p^*_l$ for all $l$. Moving from $p^*$ to $p$ lowers the other prices, so by gross substitutes $z_k(p)\le z_k(p^*)=0$: the good with the highest relative price is in excess supply and $\max_l p_l/p^*_l$ is nonincreasing along the path; symmetrically $\min_l p_l/p^*_l$ is nondecreasing. With strict gross substitutes the spread falls strictly until it is zero, which is convergence to the ray, and the same step with $p$ and $p^*$ both equilibria gives uniqueness. (c) The bridge: under gross substitutes $p^*\cdot z(p)>0$ off the ray, shown by homogeneity and moving from $p^*$ to $p$ one group of prices at a time, so (a) covers that case as well.

Matters: The first rigorous stability theory for competitive equilibrium, and the identification of gross substitutes as the benign case in which uniqueness, stability and monotone comparative statics hold together. It also exposed the limits: the process is a fiction (no trade, nobody sets prices), stability needs far more than existence does, and [[Scarf cycles]] showed the extra assumptions cannot be dropped. Saari and Simon (1978) later showed that a price mechanism that converges for every economy must use essentially all of the Jacobian of $z$, not just the sign of excess demand. Gross substitutes returns as the central condition in discrete settings, Kelso–Crawford (1982), Gul–Stacchetti (1999, 2000) and Ausubel (2006), where the tâtonnement becomes a dynamic auction.

Connections:
- Samuelson (1941, 1947): the dynamic formulation and the correspondence principle linking stability to comparative statics.
- [[Scarf cycles]]: the counterexample that bounds what can be proved.
- [[Sonnenschein–Mantel–Debreu]]: why stability cannot follow from individual rationality.
- Uzawa (1960): Walras' own tâtonnement in the theory of exchange.
- Hahn–Negishi (1962) and Fisher (1983): non-tâtonnement processes with trade out of equilibrium.
- Saari–Simon (1978): the informational impossibility result.
- Kelso–Crawford (1982), Gul–Stacchetti (1999, 2000), Ausubel (2006): gross substitutes and tâtonnement auctions with indivisibilities.

## Scarf cycles

Papers:
- Scarf, H. (1960), "Some Examples of Global Instability of the Competitive Equilibrium," *International Economic Review* 1(3), 157–172.
- Hirota, M. (1981), "On the Stability of Competitive Equilibrium and the Patterns of Initial Holdings: An Example," *International Economic Review* 22(2), 461–467. Which endowment patterns give orbits and which give convergence.
- Anderson, C. M., C. R. Plott, K.-I. Shimomura and S. Granat (2004), "Global Instability in Experimental General Equilibrium: The Scarf Example," *Journal of Economic Theory* 115(2), 209–249. The economy in the laboratory.

Question: Is tâtonnement stable in general, or only under conditions like gross substitutes? Is there an economy, as well behaved as one likes, with a unique equilibrium that the auctioneer never finds?

Setting: Three goods, three consumers. Consumer $i$ owns one unit of good $i$ and wants goods $i$ and $i+1$ (indices mod 3) in fixed proportions:
$$u_1=\min\{x_1,x_2\},\quad u_2=\min\{x_2,x_3\},\quad u_3=\min\{x_3,x_1\},\qquad \omega_1=e_1,\ \omega_2=e_2,\ \omega_3=e_3.$$
Consumer 1 spends her wealth $p_1$ on equal amounts of goods 1 and 2, so her excess demand is $\big(-\tfrac{p_2}{p_1+p_2},\ \tfrac{p_1}{p_1+p_2},\ 0\big)$, and cyclically for the others. Aggregate excess demand:
$$z_1(p)=\frac{p_3}{p_1+p_3}-\frac{p_2}{p_1+p_2},\qquad z_2(p)=\frac{p_1}{p_1+p_2}-\frac{p_3}{p_2+p_3},\qquad z_3(p)=\frac{p_2}{p_2+p_3}-\frac{p_1}{p_1+p_3}.$$
Tâtonnement $\dot p_l=z_l(p)$.

Result: The unique equilibrium up to scale is $p^*=(1,1,1)$. Along every solution of $\dot p=z(p)$ both $\|p\|^2$ and $p_1p_2p_3$ are constant, so every path from a non-equilibrium $p(0)$ is a closed curve around $p^*$: prices cycle forever and never converge. Scarf gives three examples; depending on the pattern of initial holdings, prices orbit clockwise, orbit counterclockwise, or converge, and Hirota (1981) characterizes the paths.

Work: Complementarity arranged in a cycle. Each consumer sells the good she owns to buy a bundle containing the next good, so a high $p_1$ makes consumer 1 rich and bids up good 2, which enriches consumer 2 and bids up good 3, and so on around the triangle; excess demand chases the prices around rather than toward the equilibrium. Three goods are the minimum, since with two the tâtonnement moves on a line and cannot cycle. Nothing pathological is needed: preferences are continuous, convex and monotone, the economy is symmetric, and the equilibrium is unique.

Proof: Direct computation. Walras' law gives $\tfrac{d}{dt}\|p\|^2=2\,p\cdot z(p)=0$, which holds in any economy under $\dot p=z(p)$. The special fact is that $\sum_l z_l(p)/p_l=0$ identically for this economy (check it from the formulas), so $\tfrac{d}{dt}\log(p_1p_2p_3)=\sum_l\dot p_l/p_l=0$. Two independent conserved quantities in $\mathbb{R}^3$ confine each path to a closed curve, the intersection of a sphere with a surface $p_1p_2p_3=c$, which degenerates to a point only at $p^*$. Uniqueness: $z_1(p)=0$ reduces to $p_1p_3=p_1p_2$, so $p_2=p_3$, and $z_2(p)=0$ reduces to $p_1p_2=p_2p_3$, so $p_1=p_3$. With speeds $k_l$ the conserved quantities become $\sum_l p_l^2/k_l$ and $\sum_l(\log p_l)/k_l$, so the cycling is not an artifact of equal speeds.

Matters: Stability is not a property of competitive equilibrium as such. Before Scarf the hope was that the Arrow–Hurwicz results were the general case; after it, gross-substitutes-type assumptions are known to be necessary rather than convenient, and [[Sonnenschein–Mantel–Debreu]] later explained why: nothing in individual rationality excludes the aggregate excess demand of this economy, or of any other. The example is also the standard test bed for anything claiming to find equilibrium. Anderson, Plott, Shimomura and Granat (2004) ran it as a double auction in the laboratory and found average prices orbiting in the direction the model predicts.

Connections:
- [[Tâtonnement and stability]]: the positive results this example bounds.
- [[Sonnenschein–Mantel–Debreu]]: the general reason such examples cannot be excluded.
- Hirota (1981): price paths as a function of endowment patterns in the same economy.
- Anderson, Plott, Shimomura and Granat (2004): experimental confirmation of the orbits.
- Saari–Simon (1978): no price mechanism using only excess demand can be made to work in general.

## Sonnenschein–Mantel–Debreu

Years: 1972–74

Papers:
- Sonnenschein, H. (1972), "Market Excess Demand Functions," *Econometrica* 40(3), 549–563.
- Sonnenschein, H. (1973), "Do Walras' Identity and Continuity Characterize the Class of Community Excess Demand Functions?," *Journal of Economic Theory* 6(4), 345–354.
- Mantel, R. (1974), "On the Characterization of Aggregate Excess Demand," *Journal of Economic Theory* 7(3), 348–353.
- Debreu, G. (1974), "Excess Demand Functions," *Journal of Mathematical Economics* 1(1), 15–21.
- Mantel, R. (1976), "Homothetic Preferences and Community Excess Demand Functions," *Journal of Economic Theory* 12(2), 197–201.

Question: Aggregate excess demand of an exchange economy is continuous, homogeneous of degree zero and satisfies Walras' law. Does the hypothesis that it comes from utility-maximizing consumers impose anything else?

Setting: Exchange economy with $L$ goods; consumers $i$ with preferences $\succsim_i$ and endowments $\omega_i\gg 0$; aggregate excess demand $z(p)=\sum_i\big(x_i(p,\,p\cdot\omega_i)-\omega_i\big)$. Normalize prices to the unit sphere and fix $\varepsilon>0$:
$$P_\varepsilon=\{\,p\in\mathbb{R}^L_+:\ \|p\|=1,\ p_l\ge\varepsilon \text{ for all } l\,\}.$$
Individual demand satisfies the weak axiom and has a symmetric, negative semidefinite Slutsky matrix; the question is what survives summation.

Result: (Debreu 1974) Let $z:P_\varepsilon\to\mathbb{R}^L$ be any continuous function with $p\cdot z(p)=0$ for all $p$. Then there is an exchange economy with $L$ consumers, each with continuous, strictly convex, monotone preferences and a strictly positive endowment, whose aggregate excess demand coincides with $z$ on $P_\varepsilon$. Sonnenschein (1972, 1973) posed the problem and proved partial versions; Mantel (1974) proved the full statement; Debreu's version gets the number of consumers down to $L$, which is the right number, since with fewer consumers than goods there are genuine restrictions (Diewert 1977, Geanakoplos–Polemarchakis 1980). Mantel (1976): the $L$ consumers can be taken to have homothetic preferences. Kirman–Koch (1986): identical preferences and collinear endowments do not help either.

Work: Income effects that differ across consumers. Walras' law and homogeneity hold consumer by consumer and survive summation; the weak axiom and Slutsky negative semidefiniteness do not, because a price change redistributes wealth across consumers whose endowments differ in composition, and the resulting shift in demand can point anywhere. Keeping prices away from the boundary, $p_l\ge\varepsilon$, is what makes the construction go through: on a compact price set the required individual excess demands can be given positive coefficients, and then they are rationalizable.

Proof: Debreu's construction. Because $\|p\|=1$, the vectors $e_l-p_lp$ are the projections of the coordinate vectors onto the hyperplane orthogonal to $p$; they span it, and $\sum_l p_l(e_l-p_lp)=0$. By Walras' law $z(p)$ lies in that hyperplane, so for any constant $K$,
$$z(p)=\sum_l\big(z_l(p)+Kp_l\big)\,(e_l-p_lp).$$
On $P_\varepsilon$ the $z_l$ are bounded and $p_l\ge\varepsilon$, so $K$ can be chosen to make every coefficient $\beta_l(p)=z_l(p)+Kp_l$ positive. Give consumer $l$ the endowment $e_l$ and the excess demand $\beta_l(p)(e_l-p_lp)$; it satisfies Walras' law by construction and the $L$ of them sum to $z$. Debreu's lemma says any such function with a continuous positive coefficient is the excess demand of a consumer with continuous, strictly convex, monotone preferences. The geometry: the bundle $e_l+\beta(e_l-p_lp)$ is the point of the budget hyperplane nearest to $(1+\beta)e_l$ on the $l$-th axis, and a revealed-preference reversal between $p$ and $p'$ would need both $p_l\le(p\cdot p')p'_l$ and $p'_l\le(p\cdot p')p_l$, impossible since $p\cdot p'<1$ for distinct unit vectors.

Matters: The decisive negative result of the theory. Uniqueness, stability of tâtonnement and comparative statics cannot be derived from individual rationality; any continuous excess demand, hence any tâtonnement dynamics including [[Scarf cycles]], is consistent with a well-behaved economy. Restrictions must come from somewhere else: from assumptions on the distribution of preferences and endowments (Hildenbrand 1983, 1994; Grandmont 1992), or from observing more than $z$ (Brown–Matzkin 1996 show that the equilibrium manifold, which records endowments too, is testable). It is also the formal case against the representative consumer (Kirman 1992).

Connections:
- [[Existence of competitive equilibrium]]: the continuity, homogeneity and Walras' law used there turn out to be essentially everything.
- [[Tâtonnement and stability]] and [[Scarf cycles]]: SMD is the general form of Scarf's warning.
- Shafer–Sonnenschein (1982), *Handbook of Mathematical Economics* vol. 2, ch. 14: the survey.
- Diewert (1977), Geanakoplos–Polemarchakis (1980): restrictions when there are fewer consumers than goods.
- Kirman–Koch (1986): identical preferences and collinear endowments still give anything.
- Brown–Matzkin (1996): testable restrictions on the equilibrium manifold; Chiappori–Ekeland (1999) on the structure of the problem.
- Hildenbrand (1983, 1994), Grandmont (1992): restrictions from heterogeneity.
- Kirman (1992): "Whom or What Does the Representative Individual Represent?"

# Decision theory

Choice under uncertainty begins with Bernoulli (1738), who valued gambles by the expected utility of wealth with a concave utility, to dispose of the St. Petersburg paradox, but had no foundation for the utility beyond introspection. Von Neumann and Morgenstern (1944, 1947) supplied one for objective probabilities: the independence axiom makes preferences over lotteries linear in probabilities and the utility cardinal. Savage (1954) removed the objective probabilities, deriving both the probability and the utility from preferences over acts, with the sure-thing principle as the key postulate. Arrow (1953) and Debreu (1959) carried the same state space into general equilibrium, where an act is a state-contingent consumption plan and complete markets price it; that is the state-preference approach and the hinge to the general equilibrium topic. Minimax is the other pole: von Neumann's theorem, Wald's statistical decision theory, which Savage wrote against, and Gilboa and Schmeidler's (1989) maxmin expected utility, which brought the worst case back in controlled form after Ellsberg (1961) showed the sure-thing principle failing under ambiguity.

## Bernoulli's expected utility

Papers:
- Bernoulli, D. (1738), "Specimen theoriae novae de mensura sortis," *Commentarii Academiae Scientiarum Imperialis Petropolitanae* 5, 175–192. English translation by L. Sommer, "Exposition of a New Theory on the Measurement of Risk," *Econometrica* 22(1), 1954, 23–36.
- Cramer, G. (1728), letter to Nicolas Bernoulli, reproduced in the paper. Square-root utility and a utility ceiling, the first answers to the problem Nicolas Bernoulli had posed to Montmort in 1713.
- Menger, K. (1934), "Das Unsicherheitsmoment in der Wertlehre," *Zeitschrift für Nationalökonomie* 5, 459–485. Unbounded utility brings the paradox back.
- Samuelson, P. A. (1977), "St. Petersburg Paradoxes: Defanged, Dissected, and Historically Described," *Journal of Economic Literature* 15(1), 24–55. The survey.

Question: How should a risky prospect be valued, if not by its expected monetary value? A fair coin is tossed until the first head; the game pays $2^{k-1}$ ducats if that happens on toss $k$. Its expected value is infinite, and nobody would pay more than a few ducats to play.

Setting: Initial wealth $w$ and a gamble paying $x_k$ with probability $p_k$. Bernoulli proposes that a gain raises utility ("emolumentum") by an amount inversely proportional to the wealth one already has, $du=b\,dx/x$, so $u(x)=b\log(x/\alpha)$, and that a gamble is worth its moral expectation $\sum_k p_k\,u(w+x_k)$ rather than its mathematical expectation $\sum_k p_kx_k$. Its value in money is the certainty equivalent $c$ solving $u(w+c)=\sum_k p_k\,u(w+x_k)$.

Result: Under moral expectation with $u=\log$ the St. Petersburg game has a finite value that depends on wealth: about 3 ducats for someone who has 10, about 6 for someone who has 1000. Three consequences are drawn in the paper. A fair gamble, one with zero expected gain, always lowers moral expectation, so a prudent person declines fair bets. Insurance can be worth buying at a premium above its expected cost and worth selling at that premium by someone wealthier, so both sides gain. Splitting a shipment across several ships raises moral expectation. Cramer's alternatives, $u=\sqrt{x}$ or a utility that stops growing beyond some wealth, give the same qualitative answers. Menger (1934) showed that for any unbounded $u$ there is a modified game, paying $x_k$ with $u(x_k)=2^k$, whose moral expectation is infinite, so only bounded utility disposes of the paradox entirely.

Work: Concavity, and the decision to evaluate final wealth. Diminishing marginal utility makes the utility of the game converge although its expectation diverges, and makes a sure thing worth more than a fair gamble with the same mean. The log specification is incidental; what carries everything is that value attaches to the person's utility rather than to the money. Evaluating final positions $w+x_k$, asset integration, is a second and less visible assumption, and it is the one prospect theory later gives up.

Proof: A specification and a calculation rather than a theorem. $du=b\,dx/x$ integrates to $b\log x$ plus a constant. For the game, $\sum_k 2^{-k}\log(w+2^{k-1})$ converges because $\log(w+2^{k-1})$ grows like $k\log 2$ while the weights fall like $2^{-k}$; the certainty equivalent is $\exp$ of the sum, minus $w$. The claim about fair bets is Jensen's inequality for concave $u$: if $\sum_kp_kx_k=0$ then $u(w)=u\big(w+\sum_kp_kx_k\big)\ge\sum_kp_k\,u(w+x_k)$. Menger's construction: given unbounded $u$, choose $x_k$ with $u(x_k)\ge 2^k$ and pay $x_k$ with probability $2^{-k}$.

Matters: The first statement of expected utility and of diminishing marginal utility, two centuries before either was standard, and the first analysis of insurance and diversification. Its weakness was the source of $u$: an introspective measure of satisfaction, which ordinalism discarded in the 1930s, so that there was no basis for the criterion until von Neumann and Morgenstern derived a cardinal $u$ from preferences over lotteries. The paper also fixed the questions the field kept asking: what justifies valuing gambles by an expectation at all (vNM, Savage), what risk aversion is (Pratt 1964, Arrow 1965: curvature of $u$, measured by $-u''/u'$), and whether people evaluate final wealth or gains and losses (Kahneman–Tversky 1979).

Connections:
- [[Von Neumann–Morgenstern expected utility]] supplies the foundation Bernoulli's $u$ lacked.
- [[Savage's subjective expected utility]] extends the criterion to subjective probabilities.
- Pratt (1964), Arrow (1965): risk aversion as curvature of $u$.
- Menger (1934) on boundedness; Savage's P7 and Arrow (1971) for why utility is bounded in the axiomatic theories.
- Kahneman–Tversky (1979): reference dependence in place of asset integration.
- Samuelson (1977): the paradox's history and its later variants.

## Von Neumann–Morgenstern expected utility

Papers:
- von Neumann, J. and O. Morgenstern (1944; 2nd ed. 1947), *Theory of Games and Economic Behavior*, Princeton University Press, §3 and the appendix "The Axiomatic Treatment of Utility," added in the second edition.
- Marschak, J. (1950), "Rational Behavior, Uncertain Prospects, and Measurable Utility," *Econometrica* 18(2), 111–141. The axioms as economists state them.
- Herstein, I. N. and J. Milnor (1953), "An Axiomatic Approach to Measurable Utility," *Econometrica* 21(2), 291–297. Mixture spaces and the clean proof.
- Samuelson, P. A. (1952), "Probability, Utility, and the Independence Axiom," *Econometrica* 20(4), 670–678, and Malinvaud, E. (1952), "Note on von Neumann–Morgenstern's Strong Independence Axiom," *Econometrica* 20(4), 679. Where the independence axiom hides in the original.
- Allais, M. (1953), "Le comportement de l'homme rationnel devant le risque," *Econometrica* 21(4), 503–546. The counterexample.

Question: When probabilities are objective, what conditions on preferences over lotteries make choice equivalent to maximizing the expectation of some utility, and in what sense is that utility unique?

Setting: A set of outcomes $X$. Lotteries are probability distributions on $X$ with finite support; $P$ is the set of them, closed under mixing, $\alpha p+(1-\alpha)q\in P$. A preference relation $\succsim$ on $P$ and three axioms.
- Weak order: $\succsim$ is complete and transitive.
- Continuity: if $p\succ q\succ r$ there are $\alpha,\beta\in(0,1)$ with $\alpha p+(1-\alpha)r\succ q\succ\beta p+(1-\beta)r$.
- Independence: for all $p,q,r$ and $\alpha\in(0,1]$, $p\succ q$ if and only if $\alpha p+(1-\alpha)r\succ\alpha q+(1-\alpha)r$.

Result: $\succsim$ satisfies the three axioms if and only if there is $u:X\to\mathbb{R}$ with
$$p\succsim q\iff\sum_x p(x)\,u(x)\ \ge\ \sum_x q(x)\,u(x),$$
and $u$ is unique up to positive affine transformations $au+b$ with $a>0$. Herstein–Milnor: the same on any mixture space, with the representation an affine function on $P$.

Work: Independence. Mixing two lotteries with a common third does not change their ranking, which is what makes the representation linear in probabilities; it is the substantive content, since weak order and continuity alone give only a continuous ordinal utility on $P$. Continuity excludes lexicographic preferences. Cardinality comes from mixing itself: probabilities supply a ruler, and $u$ is cardinal only in the sense that it is pinned down by preferences over lotteries, not because satisfaction is measurable.

Proof: Calibration against the best and worst outcomes, for finite $X$. Let $b\succsim x\succsim w$ for all $x$; if $b\sim w$ every lottery is indifferent and a constant $u$ works. Independence makes the line $\alpha\delta_b+(1-\alpha)\delta_w$ strictly increasing in $\alpha$, and continuity then gives, for each lottery $p$, a unique $\alpha_p\in[0,1]$ with $p\sim\alpha_p\delta_b+(1-\alpha_p)\delta_w$. Set $U(p)=\alpha_p$, so $p\succsim q\iff\alpha_p\ge\alpha_q$. Independence applied to the two indifferences gives $\lambda p+(1-\lambda)q\sim\big(\lambda\alpha_p+(1-\lambda)\alpha_q\big)\delta_b+\dots$, so $U$ is affine, hence $U(p)=\sum_xp(x)\,U(\delta_x)$ and $u(x)=U(\delta_x)$. Uniqueness: any other affine representation $V$ is determined by $V(\delta_b)$ and $V(\delta_w)$ through the same $\alpha_p$. Infinite $X$: run the argument on finite subsets and patch, which works for simple lotteries; non-simple lotteries or unbounded $u$ need a further continuity condition (Fishburn 1970).

Matters: It rehabilitated cardinal utility on ordinalist terms and produced the object on which the theory of choice under risk is built: risk attitudes are the curvature of $u$ (Pratt 1964, Arrow 1965), comparative risk is the Rothschild–Stiglitz (1970) order, and insurance, portfolio choice, auctions, contracts and mixed strategies in games all run on expected utility. The appendix exists because the game theory needed it: mixed strategies require payoffs that are meaningful up to affine transformation. Its empirical trouble came almost at once, Allais (1953) showing systematic violations of independence (the common consequence and common ratio effects), and the responses, Machina (1982), rank-dependent utility (Quiggin 1982) and prospect theory (Kahneman–Tversky 1979, Tversky–Kahneman 1992), are each defined by which part of the independence axiom they keep.

Connections:
- [[Bernoulli's expected utility]]: the criterion without the foundation.
- [[Savage's subjective expected utility]] derives the probabilities as well; Anscombe–Aumann (1963) uses vNM lotteries as the consequences of acts, and [[Minimax]] builds on that framework.
- Herstein–Milnor (1953): mixture spaces. Fishburn (1970): the general case.
- Pratt (1964), Arrow (1965): risk aversion. Rothschild–Stiglitz (1970): increasing risk.
- Allais (1953), Kahneman–Tversky (1979), Machina (1982), Quiggin (1982): non-expected utility.
- Kreps (1988), *Notes on the Theory of Choice*: the standard exposition.

## Savage's subjective expected utility

Papers:
- Savage, L. J. (1954), *The Foundations of Statistics*, Wiley; 2nd revised edition, Dover 1972. Chapters 2, 3 and 5.
- Ramsey, F. P. (1926), "Truth and Probability," in *The Foundations of Mathematics* (1931); de Finetti, B. (1937), "La prévision: ses lois logiques, ses sources subjectives," *Annales de l'Institut Henri Poincaré* 7, 1–68. Subjective probability from betting, before Savage.
- Anscombe, F. J. and R. J. Aumann (1963), "A Definition of Subjective Probability," *Annals of Mathematical Statistics* 34(1), 199–205. The tractable version, with objective lotteries as consequences.
- Ellsberg, D. (1961), "Risk, Ambiguity, and the Savage Axioms," *Quarterly Journal of Economics* 75(4), 643–669. The counterexample to P2.
- Fishburn, P. C. (1970), *Utility Theory for Decision Making*, ch. 14. The complete proof.

Question: With no objective probabilities given, can both the probabilities and the utility in an expected utility criterion be derived from preferences over acts alone?

Setting: States $S$, events $E\subseteq S$ (Savage allows all subsets), consequences $X$, acts $f:S\to X$. Write $f_Eh$ for the act equal to $f$ on $E$ and to $h$ off $E$, write a constant act as its consequence, and call $E$ null if $f_Eh\sim g_Eh$ for all $f,g,h$. Conditional preference $f\succsim_Eg$ means $f_Eh\succsim g_Eh$ for all $h$. The postulates.
- P1. $\succsim$ is a weak order.
- P2 (sure-thing principle). $f_Eh\succsim g_Eh$ iff $f_Eh'\succsim g_Eh'$: how $f$ and $g$ compare does not depend on what they share off $E$.
- P3 (state independence). For non-null $E$ and consequences $x,y$: $x_Eh\succsim y_Eh$ iff $x\succsim y$.
- P4 (betting preferences do not depend on the stakes). For $x\succ y$ and $x'\succ y'$: $x_Ay\succsim x_By$ iff $x'_Ay'\succsim x'_By'$.
- P5. Some $x\succ y$.
- P6 (small events). If $f\succ g$ then for every $x$ there is a finite partition $\{E_1,\dots,E_n\}$ of $S$ with $x_{E_i}f\succ g$ and $f\succ x_{E_i}g$ for every $i$.
- P7 (for non-simple acts). If $f\succsim_E g(s)$ for all $s\in E$ then $f\succsim_Eg$, and if $f(s)\succsim_Eg$ for all $s\in E$ then $f\succsim_Eg$.

Result: $\succsim$ satisfies P1–P6 iff there are a finitely additive probability $\mu$ on $S$ that is convex-ranged (for every event $E$ and $\rho\in[0,1]$ some $F\subseteq E$ has $\mu(F)=\rho\,\mu(E)$) and a utility $u:X\to\mathbb{R}$ such that, for simple acts,
$$f\succsim g\iff\int_S u(f(s))\,d\mu(s)\ \ge\ \int_S u(g(s))\,d\mu(s);$$
$\mu$ is unique and $u$ is unique up to positive affine transformation. With P7 the representation holds for all acts and $u$ is bounded.

Work: P2 and P4 make the ranking of bets depend on the events alone, which yields a qualitative probability, a complete, transitive and additive likelihood order on events; P6 makes the state space atomless, so that the order is represented by a unique number and every lottery can be manufactured from events. P6 is the heavy lift: it rules out finite state spaces, where probabilities derived from preference are not unique. The probabilities are a theorem about the agent's betting dispositions rather than an input, which is the point of the construction.

Proof: (1) Likelihood from bets. For $x\succ y$ define $A\succsim^*B$ iff $x_Ay\succsim x_By$; P4 makes this independent of the stakes, P1 makes it a weak order, and P2 makes it additive: for $C$ disjoint from $A$ and $B$, $A\succsim^*B\iff A\cup C\succsim^*B\cup C$. (2) Numbers from fineness. P6 yields, for every $n$, partitions of $S$ into $2^n$ events that are uniform up to the order (no union of $r$ cells is more likely than any union of $r+1$), and $\mu(A)=\sup\{k/2^n:A\succsim^*\text{some union of }k\text{ cells}\}$ is the unique additive representation of $\succsim^*$; convex-rangedness follows. (3) Utility from induced lotteries. A simple act induces a distribution over consequences under $\mu$; P2 and P3 give that acts with the same distribution are indifferent, and because $\mu$ is convex-ranged every simple lottery is induced by some act, so $\succsim$ defines a preference over simple lotteries, which satisfies the vNM axioms (independence from P2, continuity from P6). The vNM theorem gives $u$, and $\int u(f)\,d\mu$ is the expected utility of the induced lottery. (4) P7 extends the representation to arbitrary acts by dominance and forces $u$ to be bounded, since an unbounded $u$ would permit a St. Petersburg act that P7 cannot rank.

Matters: The foundation of Bayesian decision theory. Probability is personal and is read off from preference, which with Ramsey and de Finetti underwrites Bayesian statistics and, in economics, the Harsanyi (1967–68) apparatus of types and priors, rational expectations and the priors of mechanism design: a prior is a representation of coherent betting, not a claim about the world. It also set the terms of every later dispute. Ellsberg (1961) showed that choices between bets on an urn of known composition and one of unknown composition violate P2, which produced maxmin expected utility ([[Minimax]]), Choquet expected utility (Schmeidler 1989) and the smooth model (Klibanoff–Marinacci–Mukerji 2005); Anscombe–Aumann (1963) replaced P6 with objective lotteries and became the working framework; state-dependent utility (Karni 1985) attacks P3; Machina–Schmeidler (1992) keep probabilistic sophistication while dropping P2.

Connections:
- [[Von Neumann–Morgenstern expected utility]] is the last step of the proof.
- [[Arrow–Debreu contingent claims]]: the same states and acts in a market; a Savage act is a state-contingent consumption plan.
- [[Minimax]]: the alternative Savage wrote against, and its return after Ellsberg.
- Ramsey (1926), de Finetti (1937): subjective probability from betting.
- Anscombe–Aumann (1963): the finite-state workhorse.
- Ellsberg (1961), Schmeidler (1989), Machina–Schmeidler (1992), Klibanoff–Marinacci–Mukerji (2005).
- Kreps (1988), ch. 8–10, and Gilboa (2009), *Theory of Decision under Uncertainty*: expositions.

## Arrow–Debreu contingent claims

Years: 1953–59

Papers:
- Arrow, K. J. (1953), "Le rôle des valeurs boursières pour la répartition la meilleure des risques," *Économétrie*, Colloques Internationaux du CNRS 40, 41–47. English version, "The Role of Securities in the Optimal Allocation of Risk-bearing," *Review of Economic Studies* 31(2), 1964, 91–96.
- Debreu, G. (1959), *Theory of Value*, ch. 7, "Uncertainty."
- Hirshleifer, J. (1965), "Investment Decision under Uncertainty: Choice-Theoretic Approaches," *Quarterly Journal of Economics* 79(4), 509–536. The state-preference approach made standard.

Question: How does uncertainty enter general equilibrium, and what do markets need in order to allocate risk efficiently? Is a complete set of contingent contracts required, or will a smaller set of securities do?

Setting: States $s=1,\dots,S$, one of which will be revealed, and $L$ physical goods. Debreu: a commodity is a good together with the state in which it is delivered, so the commodity space is $\mathbb{R}^{LS}$ and a consumption plan is a state-contingent bundle $x=(x_1,\dots,x_S)$. Preferences $\succsim_i$ are defined directly on plans; no probabilities and no expected utility are assumed, though $U_i(x)=\sum_s\pi_{is}\,v_i(x_s)$ is the leading case. Contingent-claims markets: before the state is known, agents trade claims to good $l$ in state $s$ at price $p_{ls}$ under one budget constraint, $\sum_sp_s\cdot x_{is}\le\sum_sp_s\cdot\omega_{is}$. Arrow: instead, $S$ securities trade before the state, security $s$ paying one unit of account in state $s$ and nothing otherwise, at price $q_s$, and spot markets for the $L$ goods open in each state at prices $p_s$ once it is revealed.

Result: (Debreu) The theory applies unchanged. Under the standard assumptions on preferences and endowments a competitive equilibrium with contingent-claims prices exists, and both welfare theorems hold, so the equilibrium allocation of risk is ex ante Pareto optimal whatever agents believe about the states. (Arrow) The allocation reached with contingent claims is also reached with $S$ securities plus spot markets, and conversely: with state prices $q_s$ an agent's $S+1$ budget constraints collapse to the single constraint $\sum_sq_s\,p_s\cdot(x_s-\omega_s)\le 0$. With fewer than $S$ linearly independent securities the budget sets differ and the equilibrium is generally not optimal, which is where the incomplete-markets literature in [[Radner equilibrium]] begins.

Work: The state space, used as a device for reinterpreting the commodity space; everything else is the existing theory. Two things follow. Preferences over contingent plans are the primitives, so beliefs can differ across agents and need not be probabilistic at all; subjective expected utility is the special case in which preferences over plans are additively separable across states (Debreu 1960). And complete markets, the condition under which the single ex ante budget constraint equals the sequence of constraints, is the assumption everything hangs on.

Proof: Debreu's part is a reinterpretation rather than an argument: index commodities by state and apply [[Existence of competitive equilibrium]] and the welfare theorems verbatim. Arrow's part is an arbitrage argument. Given the spot prices $p_s$ that will rule in each state and security prices $q_s$, a plan $(x_s)$ is affordable through securities iff holding $\theta_s=p_s\cdot(x_s-\omega_s)$ units of security $s$ for each $s$ costs no more than zero at the start, that is $\sum_sq_s\,p_s\cdot(x_s-\omega_s)\le0$, which is the contingent-claims budget set at prices $q_sp_s$. The two market structures have the same budget sets, hence the same equilibria. The $q_s$ are the state prices; normalized to sum to one they are the risk-neutral probabilities, and under expected utility $q_s\propto\pi_s\,v'(x_s)$ at the optimum.

Matters: It is the state-preference approach: uncertainty as a reinterpretation of the commodity space, which made existence and the welfare theorems available for the allocation of risk and made complete markets a concept. State prices, risk-neutral probabilities and the stochastic discount factor come from here, and so do asset pricing (Lucas 1978, Harrison–Kreps 1979), the pricing of derivatives by replication, and the equivalence between contingent claims and securities that Radner (1972) then stress-tests. It also joins decision theory to markets: an act in [[Savage's subjective expected utility]] is a state-contingent consumption plan, and the market prices such plans without needing anyone's probabilities to agree, or even to exist. Arrow's paper was presented at the 1952 Paris colloquium at which Allais challenged Savage, so both halves of this topic were on the table at the same meeting.

Connections:
- [[Existence of competitive equilibrium]] and [[Radner equilibrium]]: the theory it reinterprets and the sequential generalization.
- [[Savage's subjective expected utility]]: states, acts and plans are the same objects.
- Debreu (1960), "Topological Methods in Cardinal Utility Theory": additive separability across states.
- Hirshleifer (1965, 1966): the state-preference approach in investment theory.
- Lucas (1978), Harrison–Kreps (1979), Ross (1976): asset pricing from state prices.
- Arrow (1965), *Aspects of the Theory of Risk-Bearing*; Borch (1962) on optimal risk sharing.

## Minimax

Years: 1928–89

Papers:
- von Neumann, J. (1928), "Zur Theorie der Gesellschaftsspiele," *Mathematische Annalen* 100, 295–320. The minimax theorem.
- Wald, A. (1945), "Statistical Decision Functions Which Minimize the Maximum Risk," *Annals of Mathematics* 46(2), 265–280, and Wald, A. (1950), *Statistical Decision Functions*, Wiley. Statistical decision theory as a game against nature; the framework begins in Wald (1939), *Annals of Mathematical Statistics* 10(4), 299–326.
- Savage, L. J. (1951), "The Theory of Statistical Decision," *Journal of the American Statistical Association* 46(253), 55–67. Minimax regret, and the step away from minimax toward [[Savage's subjective expected utility]].
- Gilboa, I. and D. Schmeidler (1989), "Maxmin Expected Utility with Non-Unique Prior," *Journal of Mathematical Economics* 18(2), 141–153. Minimax over priors, axiomatized.

Question: How should one choose when nothing pins down a probability over the states, and what does the worst-case criterion amount to?

Setting: Wald. A parameter $\theta\in\Theta$, nature's choice; data $X\sim P_\theta$; actions $a\in A$; a loss $L(\theta,a)$. A decision rule $\delta$ maps data to actions (randomized rules allowed) and has risk $R(\theta,\delta)=\mathbb{E}_\theta\,L(\theta,\delta(X))$. A rule is minimax if it attains $\inf_\delta\sup_\theta R(\theta,\delta)$, Bayes for the prior $\pi$ if it minimizes $\int R(\theta,\delta)\,d\pi(\theta)$, and admissible if no rule has risk weakly lower everywhere and strictly lower somewhere.

Gilboa–Schmeidler. The Anscombe–Aumann setup: states $S$ with an algebra of events, consequences in a convex set $Y$ of lotteries, acts $f:S\to Y$ taking finitely many values, mixtures taken statewise. Six axioms: weak order; certainty independence, for constant $h$ and $\alpha\in(0,1)$, $f\succ g$ iff $\alpha f+(1-\alpha)h\succ\alpha g+(1-\alpha)h$; continuity; monotonicity, $f(s)\succsim g(s)$ for all $s$ implies $f\succsim g$; uncertainty aversion, $f\sim g$ implies $\alpha f+(1-\alpha)g\succsim f$; nondegeneracy.

Result: Von Neumann. A finite two-person zero-sum game has a value in mixed strategies: $\max_x\min_y x^{\top}Ay=\min_y\max_x x^{\top}Ay$. Wald. Treat the decision problem as a zero-sum game between the statistician and nature. Under compactness conditions, with randomized rules, the game has a value, a minimax rule exists, and it is a Bayes rule against a least favorable prior; a Bayes rule whose risk is constant in $\theta$ is minimax; and, the complete class theorem, every admissible rule is a Bayes rule or a limit of Bayes rules, so nothing is lost by restricting attention to Bayes rules. Gilboa–Schmeidler. The six axioms hold iff there are a nonconstant affine $u$ on $Y$ and a nonempty closed convex set $C$ of finitely additive probabilities on $S$ such that
$$f\succsim g\iff\min_{p\in C}\int_S u(f)\,dp\ \ge\ \min_{p\in C}\int_S u(g)\,dp;$$
$C$ is unique and $u$ is unique up to positive affine transformation. With full independence in place of certainty independence, $C$ is a singleton and the representation is Anscombe–Aumann subjective expected utility.

Work: Randomization and convexity make the minimax theorem work: with mixed strategies the strategy sets are convex and the payoff bilinear, so the maximin and minimax values coincide, and the least favorable prior is nature's optimal mixed strategy. In Gilboa–Schmeidler the work is done by weakening independence to mixtures with constant acts only, which keeps the representation homogeneous and translation invariant without forcing linearity across all acts, and by uncertainty aversion, which makes hedging between indifferent acts weakly attractive and so makes the functional concave; a monotone, concave, constant-linear functional is a minimum of expectations.

Proof: Von Neumann: the two values differ only if a convex set, the achievable payoff vectors, can be separated from an orthant; separation of convex sets, or Brouwer, closes the gap, and the elementary supporting-hyperplane proof is Ville's (1938). Wald: the same theorem applied to the game with payoff $R(\theta,\delta)$, nature mixing over $\theta$ by choosing a prior and the statistician mixing over rules; the value equals both $\inf_\delta\sup_\pi\int R\,d\pi$ and $\sup_\pi\inf_\delta\int R\,d\pi$, the second being the Bayes risk of the least favorable prior, which gives minimax equals Bayes against $\pi^*$; the complete class theorem is a separating-hyperplane argument on the convex set of risk functions. Gilboa–Schmeidler: define $I$ on utility profiles $a=u\circ f$ by $I(a)=u(\text{certainty equivalent of }f)$. Certainty independence gives $I(\lambda a+c)=\lambda I(a)+c$ for $\lambda>0$ and constants $c$, monotonicity gives $a\ge b\Rightarrow I(a)\ge I(b)$, and uncertainty aversion gives superadditivity, $I(a+b)\ge I(a)+I(b)$, hence concavity. A concave positively homogeneous functional is the infimum of the linear functionals dominating it, and monotonicity with $I(1)=1$ makes those probabilities: $I(a)=\min_{p\in C}\int a\,dp$ with $C=\{p:\int a\,dp\ge I(a)\text{ for all }a\}$.

Matters: Minimax is the non-Bayesian pole of decision theory, and the theorems tie the two poles together: Wald's minimax rules are Bayes rules against the worst prior, and the complete class theorem says the Bayes rules are all one needs even on frequentist grounds. Savage's book was written against minimax; the objection, that it ignores everything but the worst state and recommends never betting, is what his minimax regret (1951) tried and failed to repair, and the *Foundations* then replaced the criterion with subjective expected utility. Ellsberg's evidence brought the worst case back in controlled form: the Gilboa–Schmeidler agent is Bayesian for each prior and minimax across priors, which is the standard model of ambiguity aversion, the basis of robust control (Hansen–Sargent) and of worst-case mechanism and contract design (Carroll 2015; Bergemann–Schlag 2011 for regret), and the reason minimax regret reappears in learning theory.

Connections:
- [[Savage's subjective expected utility]]: the Bayesian alternative, and the postulate (P2) Gilboa–Schmeidler weaken.
- [[Von Neumann–Morgenstern expected utility]]: supplies the lotteries in the Anscombe–Aumann framework.
- Ellsberg (1961): the evidence. Schmeidler (1989): Choquet expected utility, the companion representation. Maccheroni–Marinacci–Rustichini (2006): variational preferences, the general concave case.
- Ville (1938), Kakutani (1941), Fan (1953): proofs and generalizations of the minimax theorem.
- Blackwell–Girshick (1954), *Theory of Games and Statistical Decisions*: the synthesis of Wald and von Neumann.
- Hansen–Sargent (2008), *Robustness*; Carroll (2015), "Robustness and Linear Contracts"; Bergemann–Schlag (2011), "Robust Monopoly Pricing."
