const questions = [
  {
    "id": 1,
    "text": "What is a normal distribution?",
    "answer": [
      "A normal (Gaussian) distribution is a continuous, symmetric, bell-shaped distribution characterized by its mean and standard deviation.",
      "For a perfectly normal distribution, mean = median = mode, and about 68%, 95%, and 99.7% of observations fall within 1, 2, and 3 standard deviations of the mean.",
      "It matters because many statistical procedures and confidence intervals are derived under normality assumptions."
    ]
  },
  {
    "id": 2,
    "text": "What is a skewed distribution?",
    "answer": [
      "Skewness measures asymmetry. A right-skewed distribution has a long right tail and typically mean > median > mode; a left-skewed distribution has a long left tail and typically mean < median < mode.",
      "Skewness can make the mean unrepresentative and may motivate robust summaries, transformations, or non-parametric methods."
    ]
  },
  {
    "id": 3,
    "text": "What is the difference between correlation and covariance?",
    "answer": [
      "Covariance shows whether two variables move together, but its magnitude depends on their units.",
      "Correlation is normalized covariance, so it is unitless and ranges from -1 to 1, which makes strength and direction easier to compare.",
      "Neither implies causation, and Pearson correlation mainly measures linear association."
    ]
  },
  {
    "id": 4,
    "text": "What are residuals?",
    "answer": [
      "A residual is the observed value minus the model's predicted value: e_i = y_i - y_hat_i.",
      "Residual analysis helps diagnose non-linearity, heteroscedasticity, outliers, autocorrelation, and other assumption violations.",
      "For a well-specified regression model, residuals should look patternless around zero."
    ]
  },
  {
    "id": 5,
    "text": "What is a p-value?",
    "answer": [
      "A p-value is the probability, assuming the null hypothesis is true, of observing a result at least as extreme as the one obtained.",
      "A small p-value provides evidence against the null hypothesis; it is not the probability that the null hypothesis is true and does not measure effect size.",
      "Interpret it together with confidence intervals, practical significance, assumptions, and multiple-testing considerations."
    ]
  },
  {
    "id": 6,
    "text": "Explain hypothesis testing.",
    "answer": [
      "State a null hypothesis H0 and an alternative H1, choose a significance level alpha, compute an appropriate test statistic and p-value, and decide whether the data provide enough evidence to reject H0.",
      "The test must match the data type, design, and assumptions; statistical significance should be separated from practical importance."
    ]
  },
  {
    "id": 7,
    "text": "When would you use a z-test, t-test, or chi-square test?",
    "answer": [
      "Use a z-test mainly for means/proportions when the sampling distribution is well approximated by normality and population variance is known or the sample is large.",
      "Use a t-test for comparing means when population variance is unknown, especially with smaller samples.",
      "Use a chi-square test for categorical counts, such as independence between categorical variables or goodness-of-fit."
    ]
  },
  {
    "id": 8,
    "text": "What is the difference between univariate, bivariate, and multivariate analysis?",
    "answer": [
      "Univariate analysis studies one variable, mainly its distribution and summary statistics.",
      "Bivariate analysis studies the relationship between two variables, such as correlation or a two-group comparison.",
      "Multivariate analysis considers three or more variables jointly to understand combined relationships, control confounding, or build predictive models."
    ]
  },
  {
    "id": 9,
    "text": "What is a box plot and what can it tell you?",
    "answer": [
      "A box plot summarizes the median, quartiles, interquartile range (IQR), and potential outliers.",
      "The box spans Q1 to Q3; a common rule marks observations below Q1 - 1.5*IQR or above Q3 + 1.5*IQR as potential outliers.",
      "It is useful for quickly comparing spread, center, skewness, and unusual values across groups."
    ]
  },
  {
    "id": 10,
    "text": "How do you detect outliers?",
    "answer": [
      "Start with domain checks and visualization, then use statistical rules such as IQR or z-scores when their assumptions are reasonable.",
      "For higher-dimensional data, use robust multivariate methods or anomaly-detection algorithms such as Isolation Forest or Local Outlier Factor.",
      "Do not remove an outlier automatically; determine whether it is an error, a rare but valid case, or an important signal."
    ]
  },
  {
    "id": 11,
    "text": "How would you handle missing values?",
    "answer": [
      "First quantify missingness and investigate whether it is MCAR, MAR, or plausibly MNAR, because the mechanism affects the strategy.",
      "Options include deletion when missingness is small and defensible, simple imputation, KNN/model-based imputation, or methods that natively handle missing values.",
      "Add missingness indicators when informative, fit preprocessing only on training data, and compare downstream performance and distribution shifts after imputation."
    ]
  },
  {
    "id": 12,
    "text": "What is sampling? Name common sampling methods.",
    "answer": [
      "Sampling selects a subset of a population so we can estimate properties efficiently.",
      "Probability methods include simple random, stratified, systematic, and cluster sampling; non-probability methods include convenience, judgment, and quota sampling.",
      "For modeling, the sample must represent the deployment population or estimates and model performance can be biased."
    ]
  },
  {
    "id": 13,
    "text": "What is normalization vs. standardization?",
    "answer": [
      "Normalization often refers to rescaling values to a fixed range, commonly [0,1] with min-max scaling.",
      "Standardization transforms a feature to approximately zero mean and unit standard deviation using z = (x - mean)/std.",
      "Scale-sensitive methods such as KNN, SVM, PCA, and gradient-based models often benefit; tree-based models usually do not require it."
    ]
  },
  {
    "id": 14,
    "text": "What is dimensionality reduction?",
    "answer": [
      "Dimensionality reduction represents data with fewer features while preserving useful information.",
      "Feature selection keeps a subset of original variables; feature extraction creates new lower-dimensional variables, for example PCA.",
      "Benefits include faster models, less noise and multicollinearity, easier visualization, and sometimes better generalization."
    ]
  },
  {
    "id": 15,
    "text": "What is PCA?",
    "answer": [
      "Principal Component Analysis is an unsupervised linear transformation that projects data onto orthogonal directions of maximum variance.",
      "Principal components are eigenvectors of the covariance/correlation matrix, ordered by explained variance.",
      "Standardize features when scales differ, choose enough components to retain useful variance, and remember components may be less interpretable than original features."
    ]
  },
  {
    "id": 16,
    "text": "What is the bias-variance tradeoff?",
    "answer": [
      "Bias is error from overly restrictive assumptions; variance is sensitivity to the particular training sample.",
      "High bias usually causes underfitting, while high variance usually causes overfitting.",
      "The goal is not to minimize either alone, but to choose model complexity and regularization that minimize expected generalization error."
    ]
  },
  {
    "id": 17,
    "text": "What is overfitting and how do you detect it?",
    "answer": [
      "Overfitting occurs when a model fits training-specific noise and performs much better on training data than on unseen data.",
      "Detect it with a validation/test gap, cross-validation instability, learning curves, or deteriorating validation loss while training loss keeps improving.",
      "Keep the final test set untouched until model selection is complete."
    ]
  },
  {
    "id": 18,
    "text": "What is underfitting?",
    "answer": [
      "Underfitting occurs when a model is too simple or insufficiently trained to capture the underlying pattern.",
      "Both training and validation performance are poor. Remedies include richer features, a more expressive model, weaker regularization, or longer/better optimization."
    ]
  },
  {
    "id": 19,
    "text": "What is cross-validation?",
    "answer": [
      "Cross-validation repeatedly splits the training data into folds, trains on some folds, and validates on the held-out fold to estimate generalization more robustly.",
      "K-fold is common; use stratified folds for imbalanced classification and time-aware splits for time series.",
      "All preprocessing and feature selection must happen inside each fold to avoid leakage."
    ]
  },
  {
    "id": 20,
    "text": "Why do we use train, validation, and test sets?",
    "answer": [
      "The training set fits model parameters, the validation set or cross-validation guides model/hyperparameter selection, and the test set provides a final unbiased estimate.",
      "Repeatedly tuning on the test set leaks information and turns the test set into another validation set."
    ]
  },
  {
    "id": 21,
    "text": "Explain a confusion matrix.",
    "answer": [
      "For binary classification, the four cells are true positives, true negatives, false positives, and false negatives.",
      "Most classification metrics are derived from these counts, so the matrix helps reveal which type of error the model makes.",
      "The business cost of FP and FN often matters more than raw accuracy."
    ]
  },
  {
    "id": 22,
    "text": "What are precision, recall, specificity, and F1-score?",
    "answer": [
      "Precision = TP/(TP+FP): among predicted positives, how many were correct.",
      "Recall/sensitivity = TP/(TP+FN): among actual positives, how many were found. Specificity = TN/(TN+FP).",
      "F1 is the harmonic mean of precision and recall and is useful when both matter and classes are imbalanced."
    ]
  },
  {
    "id": 23,
    "text": "What is an ROC curve and AUC?",
    "answer": [
      "The ROC curve plots true-positive rate against false-positive rate as the decision threshold changes.",
      "ROC-AUC summarizes ranking ability across thresholds; 0.5 is random ranking and 1.0 is perfect ranking.",
      "For highly imbalanced problems, precision-recall curves can be more informative because they focus on positive-class performance."
    ]
  },
  {
    "id": 24,
    "text": "How do you calculate classification accuracy, and when can it mislead?",
    "answer": [
      "Accuracy = (TP + TN)/(TP + TN + FP + FN).",
      "It can be misleading with class imbalance or unequal error costs; a model predicting only the majority class can have high accuracy but zero usefulness.",
      "Choose metrics based on the decision objective, such as recall for missed fraud or precision for costly false alarms."
    ]
  },
  {
    "id": 25,
    "text": "What is RMSE and when would you use it?",
    "answer": [
      "RMSE = sqrt(mean((y - y_hat)^2)); it measures typical prediction error in the target's units.",
      "Squaring gives larger errors more weight, so RMSE is sensitive to outliers.",
      "Compare it with MAE when deciding whether large errors should be penalized more strongly."
    ]
  },
  {
    "id": 26,
    "text": "What is data leakage?",
    "answer": [
      "Data leakage occurs when training uses information that would not be available at prediction time or indirectly contains the target.",
      "Examples include scaling before the split, future information in time series, target-derived features, or duplicate entities across train and test.",
      "Prevent it with pipeline-based preprocessing, group/time-aware splits, and careful feature provenance review."
    ]
  },
  {
    "id": 27,
    "text": "How would you evaluate a model suspected of overfitting?",
    "answer": [
      "Compare train and validation metrics, inspect learning curves, and use appropriate cross-validation.",
      "Then simplify the model, add regularization, improve data quality/quantity, remove leakage, tune hyperparameters, or use early stopping.",
      "Confirm the final choice on a truly held-out test set."
    ]
  },
  {
    "id": 28,
    "text": "What are the main stages of a data science project?",
    "answer": [
      "Define the business problem and success metric; collect and understand data; clean and explore it; engineer features; build baselines and candidate models; evaluate and validate; deploy; monitor; iterate.",
      "A strong answer connects technical metrics to business outcomes and includes reproducibility, governance, and monitoring."
    ]
  },
  {
    "id": 29,
    "text": "How would you handle a key predictive variable with about 30% missing values?",
    "answer": [
      "Investigate why it is missing and whether missingness itself is predictive. Compare complete cases with missing cases and check for group/time patterns.",
      "Build several defensible treatments: missing indicator + simple imputation, model-based/KNN imputation, or a model that handles missing values natively.",
      "Perform imputation inside cross-validation, compare performance and calibration, and run sensitivity checks; do not drop the feature solely because 30% is missing if it carries unique signal."
    ]
  },
  {
    "id": 30,
    "text": "How would you process a real-time data stream for continuously updated predictions?",
    "answer": [
      "Use a streaming ingestion layer, validate/schema-check events, compute online or near-real-time features, and serve predictions through a low-latency model service.",
      "Separate training from inference, maintain a feature store or consistent feature logic, and use event-time handling/windowing for late data.",
      "Monitor throughput, latency, drift, failures, and prediction quality; retrain on a controlled schedule or based on drift rather than blindly updating every event."
    ]
  },
  {
    "id": 31,
    "text": "Your data volume suddenly increases 10x. How do you scale analytics?",
    "answer": [
      "Profile the bottleneck first: storage, compute, network, query design, or pipeline concurrency.",
      "Move to partitioned columnar storage, distributed compute where needed, incremental processing, caching, and autoscaling; optimize data layout before simply adding machines.",
      "Add data-quality checks, observability, cost controls, and load testing so scale does not reduce correctness."
    ]
  },
  {
    "id": 32,
    "text": "How would you analyze terabyte-scale data efficiently?",
    "answer": [
      "Avoid moving all data to one machine. Use distributed/object storage, partitioning, columnar formats, predicate pushdown, and distributed compute engines.",
      "Sample for exploration, aggregate early, process incrementally, and choose algorithms that support distributed or out-of-core training.",
      "Track lineage and data quality because large-scale errors propagate quickly."
    ]
  },
  {
    "id": 33,
    "text": "How do you handle unstructured text, image, audio, and video data?",
    "answer": [
      "First store raw data with metadata and a clear schema for labels/IDs. Then use modality-specific preprocessing and representation learning.",
      "Text may use tokenization/embeddings, images use CNN/vision encoders, audio uses spectrograms or audio encoders, and video often combines spatial and temporal features.",
      "Evaluate data quality and labeling, use scalable indexing/storage, and choose classical features or deep models based on data volume and task complexity."
    ]
  },
  {
    "id": 34,
    "text": "How would you build a data-driven decision-making culture?",
    "answer": [
      "Start from decision questions and agreed KPIs, not dashboards for their own sake. Build reliable data foundations, ownership, definitions, and access controls.",
      "Create self-service analytics with training, embed analysts/data scientists with decision makers, and run experiments where possible.",
      "Track whether insights change decisions and outcomes; common barriers are low trust, inconsistent definitions, poor literacy, incentives, and unclear ownership."
    ]
  },
  {
    "id": 35,
    "text": "How do you address ethics in a data science project?",
    "answer": [
      "Identify stakeholders and possible harms early, including bias, privacy, exclusion, and misuse. Examine whether training data represents affected populations.",
      "Use data minimization, access controls, fairness/error analysis across relevant groups, explainability appropriate to risk, human review, and documentation.",
      "Reassess after deployment because fairness and harm can change under distribution shift."
    ]
  },
  {
    "id": 36,
    "text": "How would you forecast monthly retail sales from five years of history?",
    "answer": [
      "Plot the series and decompose trend/seasonality; inspect missing periods, outliers, promotions, holidays, and structural breaks.",
      "Create a time-based validation scheme, compare simple seasonal-naive baselines with statistical models and ML models using lag/rolling/exogenous features.",
      "Select by an appropriate metric such as MAE/MAPE/WAPE, check residuals, and produce prediction intervals when decisions need uncertainty."
    ]
  },
  {
    "id": 37,
    "text": "How would you perform customer segmentation?",
    "answer": [
      "Define the business use of segments first. Clean and scale relevant features such as recency, frequency, monetary value, demographics, and product behavior.",
      "Compare clustering approaches such as k-means, hierarchical clustering, or density-based methods; choose cluster count with diagnostics such as silhouette score plus business interpretability.",
      "Profile and validate segments for stability, size, actionability, and downstream lift before operationalizing them."
    ]
  },
  {
    "id": 38,
    "text": "How would you analyze geospatial data for public transportation planning?",
    "answer": [
      "Clean coordinate systems, map stops/routes to a consistent CRS, and join ridership with spatial and temporal attributes.",
      "Use spatial aggregation, buffers, accessibility/catchment analysis, hotspot detection, route-level demand, and travel-time/network analysis.",
      "Visualize results on maps and validate recommendations against service constraints, equity considerations, and observed rider behavior."
    ]
  },
  {
    "id": 39,
    "text": "What is machine learning?",
    "answer": [
      "Machine learning builds models that learn patterns from data to make predictions, decisions, or discover structure without manually coding every rule.",
      "The key idea is generalization: performance on unseen data matters more than memorizing the training set."
    ]
  },
  {
    "id": 40,
    "text": "What are the main types of machine learning?",
    "answer": [
      "Supervised learning uses labeled input-output pairs; unsupervised learning finds structure in unlabeled data; reinforcement learning learns actions from rewards in an environment.",
      "Semi-supervised learning combines a small labeled set with a larger unlabeled set, and self-supervised learning creates training targets from the data itself."
    ]
  },
  {
    "id": 41,
    "text": "Supervised vs. unsupervised learning?",
    "answer": [
      "Supervised learning learns a mapping from features to known targets, commonly for classification or regression.",
      "Unsupervised learning has no target labels and is used for tasks such as clustering, dimensionality reduction, representation learning, and anomaly discovery.",
      "Evaluation is usually easier in supervised learning because ground truth exists."
    ]
  },
  {
    "id": 42,
    "text": "Classification vs. regression?",
    "answer": [
      "Classification predicts discrete classes or class probabilities; regression predicts continuous numeric values.",
      "Examples: churn yes/no is classification; house price is regression.",
      "The choice determines loss functions, metrics, and often model output structure."
    ]
  },
  {
    "id": 43,
    "text": "What is semi-supervised learning?",
    "answer": [
      "Semi-supervised learning trains with a small labeled set plus a larger unlabeled set.",
      "Common ideas include pseudo-labeling, consistency regularization, and graph-based propagation.",
      "It is useful when labels are expensive but raw data is abundant, provided pseudo-label errors are controlled."
    ]
  },
  {
    "id": 44,
    "text": "What is reinforcement learning?",
    "answer": [
      "An agent interacts with an environment, chooses actions, receives rewards, and learns a policy that maximizes expected cumulative reward.",
      "Core concepts include state, action, reward, policy, value function, discount factor, and the exploration-exploitation tradeoff."
    ]
  },
  {
    "id": 45,
    "text": "What is feature engineering?",
    "answer": [
      "Feature engineering transforms raw data into representations that make predictive patterns easier for a model to learn.",
      "It includes encoding categories, scaling, interaction terms, aggregations, lags/rolling features, domain ratios, and text/image representations.",
      "All learned transformations must be fit only on training data to avoid leakage."
    ]
  },
  {
    "id": 46,
    "text": "What is feature selection and why use it?",
    "answer": [
      "Feature selection removes irrelevant, redundant, or unstable variables while keeping original feature meanings.",
      "Methods include filter methods, wrapper methods such as recursive feature elimination, and embedded methods such as L1 regularization or tree importance.",
      "It can improve speed, interpretability, and generalization, but selection must happen within cross-validation."
    ]
  },
  {
    "id": 47,
    "text": "Parameters vs. hyperparameters?",
    "answer": [
      "Parameters are learned from data, such as regression coefficients or neural-network weights.",
      "Hyperparameters are chosen outside the fitting procedure, such as tree depth, regularization strength, number of neighbors, or learning rate.",
      "Tune hyperparameters using validation/cross-validation, not the test set."
    ]
  },
  {
    "id": 48,
    "text": "How does linear regression work?",
    "answer": [
      "Linear regression models the conditional mean of a continuous target as a linear combination of features: y_hat = beta0 + beta^T x.",
      "Ordinary least squares chooses coefficients that minimize the sum of squared residuals.",
      "Key concerns include linearity, correlated errors, heteroscedasticity, multicollinearity, influential points, and extrapolation."
    ]
  },
  {
    "id": 49,
    "text": "How does logistic regression work?",
    "answer": [
      "Logistic regression models the log-odds of a class as a linear function of features and converts the score to a probability using the sigmoid function.",
      "For binary classification, p(y=1|x) = 1/(1+exp(-z)); a threshold converts probability to a class.",
      "Despite the name, it is a linear probabilistic classifier and is often strong, fast, and interpretable."
    ]
  },
  {
    "id": 50,
    "text": "L1 vs. L2 regularization?",
    "answer": [
      "L1 adds the absolute value of coefficients to the loss and can drive some coefficients exactly to zero, giving sparse feature selection.",
      "L2 adds squared coefficients and shrinks weights smoothly, often improving stability with correlated features.",
      "The regularization strength controls the bias-variance tradeoff and should be tuned."
    ]
  },
  {
    "id": 51,
    "text": "How does a decision tree choose a split?",
    "answer": [
      "A tree evaluates candidate splits and chooses the one that most reduces impurity or prediction error.",
      "Classification commonly uses Gini impurity or entropy/information gain; regression commonly uses squared-error reduction.",
      "Trees are interpretable but high-variance, so pruning/depth limits or ensembles are often used."
    ]
  },
  {
    "id": 52,
    "text": "What is entropy and information gain?",
    "answer": [
      "Entropy measures class impurity: H = -sum p_k log2(p_k). It is zero when a node contains one class and higher when classes are mixed.",
      "Information gain is parent entropy minus the weighted entropy of child nodes after a split.",
      "A decision tree prefers splits with larger impurity reduction."
    ]
  },
  {
    "id": 53,
    "text": "What is pruning in decision trees?",
    "answer": [
      "Pruning reduces unnecessary branches to improve generalization and interpretability.",
      "Pre-pruning limits growth using max depth, minimum samples, or minimum impurity decrease; post-pruning grows a larger tree and then removes weak branches.",
      "The goal is to trade a little training fit for lower variance."
    ]
  },
  {
    "id": 54,
    "text": "How does Random Forest work?",
    "answer": [
      "Random Forest trains many decision trees on bootstrap samples and, at each split, considers a random subset of features.",
      "Predictions are averaged for regression or voted/averaged for classification.",
      "Bagging plus feature randomness reduces correlation among trees and lowers variance compared with a single tree."
    ]
  },
  {
    "id": 55,
    "text": "What is bagging?",
    "answer": [
      "Bagging trains base models independently on bootstrap-resampled datasets and aggregates their predictions.",
      "It mainly reduces variance and works especially well with unstable learners such as decision trees.",
      "Random Forest is a bagging-style ensemble with additional feature subsampling."
    ]
  },
  {
    "id": 56,
    "text": "What is boosting?",
    "answer": [
      "Boosting builds weak learners sequentially so later learners focus on errors made by the current ensemble.",
      "AdaBoost reweights difficult examples; gradient boosting fits new learners to gradients/residuals of a differentiable loss.",
      "Boosting can be very accurate but needs regularization through learning rate, tree depth, number of estimators, and subsampling."
    ]
  },
  {
    "id": 57,
    "text": "Bagging vs. boosting?",
    "answer": [
      "Bagging trains models largely in parallel and reduces variance by averaging.",
      "Boosting trains models sequentially and primarily reduces bias while also controlling variance through regularization.",
      "Bagging is generally more robust to noise; boosting may achieve stronger accuracy but can be more sensitive to tuning."
    ]
  },
  {
    "id": 58,
    "text": "How does K-Nearest Neighbors work?",
    "answer": [
      "KNN stores the training data and predicts from the k closest examples according to a distance metric.",
      "Classification uses voting; regression uses averaging, often distance-weighted.",
      "It is simple but prediction can be expensive, it is sensitive to feature scaling and irrelevant dimensions, and k controls the bias-variance tradeoff."
    ]
  },
  {
    "id": 59,
    "text": "How does Support Vector Machine work?",
    "answer": [
      "A linear SVM chooses a separating hyperplane that maximizes the margin between classes, with a regularization parameter C controlling margin violations.",
      "The kernel trick allows nonlinear boundaries by computing inner products in an implicit feature space.",
      "SVMs can work well in high-dimensional datasets but require scaling and can be expensive on very large datasets."
    ]
  },
  {
    "id": 60,
    "text": "What is Naive Bayes?",
    "answer": [
      "Naive Bayes applies Bayes' theorem with the simplifying assumption that features are conditionally independent given the class.",
      "Variants include Gaussian, Multinomial, and Bernoulli Naive Bayes.",
      "The independence assumption is often unrealistic, but the model is fast and can perform well on sparse text"
    ]
  },
  {
    "id": 61,
    "text": "How does k-means clustering work?",
    "answer": [
      "Choose k centroids, assign each point to its nearest centroid, recompute centroids from assigned points, and repeat until assignments stabilize.",
      "It minimizes within-cluster squared distances and works best for roughly spherical, similarly scaled clusters.",
      "It is sensitive to scaling, initialization, outliers, and the choice of k."
    ]
  },
  {
    "id": 62,
    "text": "What is the elbow method?",
    "answer": [
      "Run k-means for several k values and plot within-cluster sum of squares against k.",
      "Choose a point where additional clusters give diminishing reduction - the 'elbow'.",
      "Because elbows can be ambiguous, combine it with silhouette score, stability, and business interpretability."
    ]
  },
  {
    "id": 63,
    "text": "What is hierarchical clustering?",
    "answer": [
      "Hierarchical clustering builds a dendrogram of nested clusters, either agglomeratively by merging clusters or divisively by splitting them.",
      "Results depend on the distance metric and linkage rule, such as single, complete, average, or Ward linkage.",
      "It is useful when a hierarchy is meaningful and you want to inspect several cluster granularities."
    ]
  },
  {
    "id": 64,
    "text": "What is anomaly detection?",
    "answer": [
      "Anomaly detection identifies observations that differ substantially from normal behavior.",
      "Methods range from statistical thresholds to Isolation Forest, one-class SVM, Local Outlier Factor, or autoencoders.",
      "Evaluation is difficult when anomalies are rare, so domain review and precision-recall metrics are often important."
    ]
  },
  {
    "id": 65,
    "text": "How would you tune hyperparameters?",
    "answer": [
      "Define a validation strategy and metric first, then search a sensible parameter space with grid search, random search, Bayesian optimization, or successive-halving methods.",
      "Use pipelines so preprocessing occurs inside each fold, constrain the search by compute budget, and keep the test set untouched.",
      "Random search is often more efficient than exhaustive grid search when only a few dimensions matter."
    ]
  },
  {
    "id": 66,
    "text": "How would you diagnose an underperforming ML model?",
    "answer": [
      "Verify labels, leakage, train/test consistency, and metric implementation before changing algorithms.",
      "Compare against a simple baseline, inspect train-vs-validation error to distinguish high bias from high variance, analyze performance by important segments, and inspect errors.",
      "Then improve features/data, rebalance classes, tune hyperparameters, or try a model whose inductive bias fits the problem."
    ]
  },
  {
    "id": 67,
    "text": "How do you handle imbalanced classification?",
    "answer": [
      "Use stratified splits and metrics such as precision, recall, PR-AUC, F1, or cost-based metrics rather than accuracy alone.",
      "Options include class weights, threshold tuning, over/under-sampling, focal-style losses, and collecting better minority-class data.",
      "Apply resampling only inside training folds and evaluate on the original class distribution."
    ]
  },
  {
    "id": 68,
    "text": "What is class probability calibration?",
    "answer": [
      "Calibration measures whether predicted probabilities match observed frequencies; for example, among predictions near 0.8, about 80% should be positive.",
      "Assess with reliability diagrams and metrics such as Brier score. Methods such as Platt scaling or isotonic regression can calibrate a fitted model.",
      "Calibration matters when probabilities drive decisions, not just rankings."
    ]
  },
  {
    "id": 69,
    "text": "What is threshold tuning?",
    "answer": [
      "A classifier often outputs a probability or score; the decision threshold controls the tradeoff between false positives and false negatives.",
      "Choose it on validation data based on business costs, target precision/recall, or utility - not automatically at 0.5.",
      "Re-check thresholds when prevalence or costs change."
    ]
  },
  {
    "id": 70,
    "text": "How do learning curves help?",
    "answer": [
      "Learning curves plot training and validation performance as training data size or training iterations change.",
      "A persistent high error on both suggests high bias; a large gap suggests high variance.",
      "They help decide whether more data, more capacity, stronger regularization, or better features are likely to help."
    ]
  },
  {
    "id": 71,
    "text": "What is concept drift vs. data drift?",
    "answer": [
      "Data drift means the input distribution P(X) changes; concept drift means the relationship between inputs and target P(Y|X) changes.",
      "Monitor input distributions, prediction distributions, performance when labels arrive, and business KPIs.",
      "A detected drift is a signal to investigate, not automatic proof that retraining is required."
    ]
  },
  {
    "id": 72,
    "text": "How would you deploy a model to production?",
    "answer": [
      "Package preprocessing and model logic together, version the artifact and dependencies, expose it through batch or online inference, and test with representative requests.",
      "Use staged rollout such as shadow/canary/A-B deployment, monitor latency/errors/data quality/predictions, and keep rollback paths.",
      "Also define retraining, model registry, lineage, security, and ownership."
    ]
  },
  {
    "id": 73,
    "text": "What should you monitor after deployment?",
    "answer": [
      "Service health: latency, throughput, errors, resource use. Data health: schema violations, missingness, drift. Model health: prediction distributions, calibration, and performance once labels arrive.",
      "Business outcomes and fairness/reliability by important segments should also be monitored.",
      "Alerts need actionable thresholds and runbooks; dashboards alone are not monitoring."
    ]
  },
  {
    "id": 74,
    "text": "How would you integrate a model into a web application?",
    "answer": [
      "Serialize/version the model and preprocessing, create a prediction service or server-side endpoint, validate incoming features, and return predictions with appropriate metadata.",
      "Containerize the service, add authentication, rate limits, logging, tests, and latency/error monitoring.",
      "Never duplicate feature logic inconsistently between training and serving."
    ]
  },
  {
    "id": 75,
    "text": "How would you build a churn model?",
    "answer": [
      "Define churn and the prediction horizon carefully, create features using only information available before the cutoff, and split by time/customer to avoid leakage.",
      "Train interpretable baselines and stronger tree/boosting models; evaluate ranking, recall/precision at operational capacity, and calibration.",
      "The final metric should reflect retention economics, and the model should be paired with an intervention strategy."
    ]
  },
  {
    "id": 76,
    "text": "How would you build an anomaly/fraud detection model?",
    "answer": [
      "Define fraud labels and latency requirements; build entity/time-window features such as velocity, amount deviation, device/location changes, and network signals.",
      "If labels exist, use cost-sensitive supervised learning; if labels are sparse, combine rules and unsupervised anomaly detection.",
      "Use time-aware validation, focus on precision/recall at review capacity, and account for delayed/adversarial labels."
    ]
  },
  {
    "id": 77,
    "text": "How would you build a recommendation system?",
    "answer": [
      "Start with a popularity/content baseline, then consider collaborative filtering, matrix factorization, two-tower retrieval, or ranking models depending on scale and data.",
      "Handle cold start with content/context features, negative sampling, and exploration.",
      "Evaluate offline with ranking metrics, but validate online with A/B tests because user feedback creates selection effects."
    ]
  },
  {
    "id": 78,
    "text": "How would you build a predictive maintenance model?",
    "answer": [
      "Define the failure event and prediction horizon, align sensor/maintenance logs in time, and create rolling/window features without using post-failure information.",
      "Use time/group-aware splits by machine, compare classification/survival/anomaly approaches, and optimize for early useful warnings rather than raw accuracy.",
      "Deploy with alert thresholds tied to maintenance cost, monitor sensor drift, and retrain as equipment behavior changes."
    ]
  },
  {
    "id": 79,
    "text": "How would you scale AI from pilots to enterprise use?",
    "answer": [
      "Standardize reusable foundations: data contracts, feature/model registries, CI/CD, monitoring, security, governance, and cost controls.",
      "Prioritize use cases by measurable value and feasibility, assign product ownership, and create review processes proportional to risk.",
      "Scale successful patterns rather than copying prototypes directly; organizational adoption and process redesign are often harder than modeling."
    ]
  },
  {
    "id": 80,
    "text": "What is deep learning?",
    "answer": [
      "Deep learning is a subset of machine learning that uses multi-layer neural networks to learn hierarchical representations from data.",
      "Its main advantage is automatic representation learning, especially for high-dimensional unstructured data such as images, audio, and text.",
      "It usually needs more data and compute than classical ML and is not automatically best for small tabular problems."
    ]
  },
  {
    "id": 81,
    "text": "Traditional machine learning vs. deep learning?",
    "answer": [
      "Traditional ML often relies more on human-designed features and works extremely well on structured/tabular data with modest data sizes.",
      "Deep learning learns features jointly with the predictor and excels when raw data is complex and representation learning is central.",
      "Choose based on data type, scale, latency, interpretability, compute, and baseline performance - not fashion."
    ]
  },
  {
    "id": 82,
    "text": "What is an artificial neuron?",
    "answer": [
      "A neuron computes z = w^T x + b and then applies an activation function a = f(z).",
      "Weights control the influence of inputs, bias shifts the activation threshold, and the activation introduces the transformation passed to later layers.",
      "Networks become expressive by composing many such nonlinear units."
    ]
  },
  {
    "id": 83,
    "text": "What is a perceptron?",
    "answer": [
      "A perceptron is a single-layer linear binary classifier that computes a weighted sum plus bias and applies a threshold/step rule.",
      "It can learn linearly separable problems but cannot represent non-linearly separable functions such as XOR without additional layers/nonlinearities."
    ]
  },
  {
    "id": 84,
    "text": "What is a Multi-Layer Perceptron (MLP)?",
    "answer": [
      "An MLP is a feed-forward neural network with an input layer, one or more hidden layers, nonlinear activations, and an output layer.",
      "With sufficient hidden units and nonlinear activation, it can approximate complex nonlinear functions.",
      "Dense connectivity makes MLPs common for tabular features and as heads inside larger architectures."
    ]
  },
  {
    "id": 85,
    "text": "What are weights and biases?",
    "answer": [
      "Weights determine how strongly each input contributes to a neuron's pre-activation; biases add a trainable offset.",
      "Training adjusts both to minimize the loss. Bias allows a unit to shift its activation boundary instead of forcing it through the origin."
    ]
  },
  {
    "id": 86,
    "text": "Why do neural networks need activation functions?",
    "answer": [
      "Without nonlinear activation functions, stacking linear layers collapses to one linear transformation, so depth adds no expressive power.",
      "Activations such as ReLU, sigmoid, tanh, GELU, and softmax create nonlinear representations and shape optimization behavior."
    ]
  },
  {
    "id": 87,
    "text": "ReLU vs. sigmoid vs. tanh?",
    "answer": [
      "ReLU = max(0,x) is cheap and usually preferred in hidden layers, but neurons can die if they stay on the negative side.",
      "Sigmoid maps to (0,1) and is appropriate for independent binary probabilities at an output, but saturates and can cause small gradients in deep hidden layers.",
      "tanh maps to (-1,1), is zero-centered, and is common in recurrent gates/candidate states, but it also saturates."
    ]
  },
  {
    "id": 88,
    "text": "What is softmax?",
    "answer": [
      "Softmax converts a vector of logits into a probability distribution that sums to 1: p_i = exp(z_i)/sum_j exp(z_j).",
      "It is commonly paired with cross-entropy for mutually exclusive multi-class classification.",
      "Numerically stable implementations subtract the maximum logit before exponentiation."
    ]
  },
  {
    "id": 89,
    "text": "What is a loss function?",
    "answer": [
      "A loss function quantifies prediction error for an example or batch and supplies the objective minimized during training.",
      "Common choices include cross-entropy for classification and MSE/MAE for regression.",
      "The loss should reflect the statistical task; evaluation metrics and business objectives can differ from the training loss."
    ]
  },
  {
    "id": 90,
    "text": "What is forward propagation?",
    "answer": [
      "Forward propagation computes predictions by passing inputs through each layer using current weights, biases, and activations.",
      "The final prediction is compared with the target to compute the loss."
    ]
  },
  {
    "id": 91,
    "text": "What is backpropagation?",
    "answer": [
      "Backpropagation efficiently computes gradients of the loss with respect to every trainable parameter using the chain rule from output back to earlier layers.",
      "An optimizer then uses those gradients to update parameters.",
      "Backpropagation computes gradients; gradient descent/Adam determines how to use them."
    ]
  },
  {
    "id": 92,
    "text": "What is an epoch, batch, and iteration?",
    "answer": [
      "An epoch is one complete pass through the training dataset.",
      "A batch is the subset processed before one parameter update. An iteration/step is one batch update.",
      "With N examples and batch size B, an epoch has roughly ceil(N/B) iterations."
    ]
  },
  {
    "id": 93,
    "text": "What are hyperparameters in deep learning?",
    "answer": [
      "Examples include learning rate, batch size, number of layers/units, dropout rate, weight decay, optimizer, scheduler, kernel size, and number of epochs.",
      "They are chosen by validation/search rather than learned directly as model weights."
    ]
  },
  {
    "id": 94,
    "text": "Why is zero weight initialization a mistake?",
    "answer": [
      "If all neurons in a layer start with identical zero weights, they receive identical gradients and remain identical - the symmetry is never broken.",
      "Random initialization breaks symmetry. Xavier/Glorot is common for tanh-like activations; He initialization is common with ReLU-family activations.",
      "Biases can often start at zero because differing weights already break symmetry."
    ]
  },
  {
    "id": 95,
    "text": "What is data normalization in neural networks?",
    "answer": [
      "Input scaling keeps feature magnitudes comparable, which improves numerical conditioning and often speeds gradient-based optimization.",
      "Typical choices are standardization or domain-specific normalization; statistics must be learned from training data only."
    ]
  },
  {
    "id": 96,
    "text": "What is model capacity?",
    "answer": [
      "Capacity is a model's ability to represent complex functions, influenced by depth, width, architecture, and parameter count.",
      "Too little capacity causes underfitting; too much unconstrained capacity can overfit.",
      "Effective capacity is also shaped by optimization, regularization, and data volume."
    ]
  },
  {
    "id": 97,
    "text": "Deep vs. shallow neural networks?",
    "answer": [
      "Both can be universal approximators under broad conditions, but depth can represent some compositional functions far more parameter-efficiently.",
      "Deeper networks learn hierarchical features but are harder to optimize and may require normalization, residual connections, careful initialization, and more compute."
    ]
  },
  {
    "id": 98,
    "text": "What is gradient descent?",
    "answer": [
      "Gradient descent updates parameters in the negative direction of the loss gradient: theta <- theta - eta * grad(L).",
      "The learning rate eta controls step size; too large can diverge, too small can train very slowly.",
      "Modern training usually uses mini-batches and adaptive/momentum-based variants."
    ]
  },
  {
    "id": 99,
    "text": "Batch vs. stochastic vs. mini-batch gradient descent?",
    "answer": [
      "Batch gradient descent computes one update using the full dataset; it is stable but expensive.",
      "Stochastic gradient descent updates from one example; it is noisy and inefficient on modern hardware.",
      "Mini-batch gradient descent balances gradient quality with parallel hardware efficiency and is the standard approach."
    ]
  },
  {
    "id": 100,
    "text": "Why is mini-batch gradient descent so popular?",
    "answer": [
      "It vectorizes well on GPUs/TPUs, reduces memory compared with full-batch training, and provides useful stochasticity that can aid optimization/generalization.",
      "Batch size is a tradeoff among memory, throughput, gradient noise, and learning-rate tuning."
    ]
  },
  {
    "id": 101,
    "text": "What are common optimizers?",
    "answer": [
      "SGD is simple and often paired with momentum; RMSProp adapts per-parameter learning rates; Adam combines momentum-like first moments with adaptive second moments.",
      "Adam often converges quickly and is a strong default; SGD with momentum can generalize very well in vision tasks.",
      "Optimizer choice does not replace learning-rate schedules and regularization."
    ]
  },
  {
    "id": 102,
    "text": "What is the vanishing-gradient problem?",
    "answer": [
      "In deep or recurrent networks, repeated multiplication by derivatives smaller than one can shrink gradients exponentially as they move backward.",
      "Early layers then learn very slowly. Saturating sigmoid/tanh activations make this worse.",
      "ReLU-family activations, good initialization, normalization, residual connections, LSTM/GRU gates, and attention help."
    ]
  },
  {
    "id": 103,
    "text": "What is the exploding-gradient problem?",
    "answer": [
      "Repeated multiplication by large derivatives/weights can make gradients grow extremely large, causing unstable updates, NaNs, or divergence.",
      "Use gradient clipping, appropriate initialization, normalization, smaller learning rates, and stable architectures such as residual connections."
    ]
  },
  {
    "id": 104,
    "text": "What is gradient clipping?",
    "answer": [
      "Gradient clipping limits gradient magnitude before the optimizer update, commonly by clipping the global norm to a threshold.",
      "It is especially useful in RNNs and very deep models to control exploding gradients; it does not fix the root cause of vanishing gradients."
    ]
  },
  {
    "id": 105,
    "text": "What is dropout?",
    "answer": [
      "During training, dropout randomly zeroes a fraction of activations and rescales the remainder, discouraging co-adaptation.",
      "It acts as a regularizer and approximate ensemble-like technique, but can slow convergence and is not always beneficial in architectures already strongly regularized.",
      "Dropout is disabled at inference."
    ]
  },
  {
    "id": 106,
    "text": "How do you detect and reduce overfitting in deep learning?",
    "answer": [
      "Look for training loss continuing to improve while validation loss worsens, or a large train-validation metric gap.",
      "Use more/cleaner data, augmentation, weight decay, dropout, early stopping, smaller capacity, transfer learning, or stronger validation design.",
      "Also rule out leakage and train/validation distribution mismatch."
    ]
  },
  {
    "id": 107,
    "text": "What is early stopping?",
    "answer": [
      "Early stopping monitors validation performance and stops training when improvement stalls for a chosen patience period.",
      "It prevents unnecessary training and acts as regularization; restore the best checkpoint rather than the final epoch."
    ]
  },
  {
    "id": 108,
    "text": "What is batch normalization?",
    "answer": [
      "BatchNorm normalizes intermediate activations using mini-batch statistics and then applies learnable scale/shift parameters.",
      "It can speed and stabilize training and provides some regularization, especially in CNNs.",
      "Training and inference differ because inference uses running statistics; small batches can make estimates noisy."
    ]
  },
  {
    "id": 109,
    "text": "Layer normalization vs. batch normalization?",
    "answer": [
      "BatchNorm normalizes across examples in a batch for each feature/channel; LayerNorm normalizes across features within each individual example.",
      "LayerNorm is independent of batch size and is standard in Transformers; BatchNorm remains common in convolutional networks."
    ]
  },
  {
    "id": 110,
    "text": "What should you check if the loss does not decrease at the start of training?",
    "answer": [
      "Verify labels, loss/output compatibility, data scaling, and that parameters actually receive gradients.",
      "Check learning rate, initialization, frozen layers, numerical issues, excessive regularization, activation saturation, and data pipeline bugs.",
      "Try to overfit a tiny batch; if the model cannot, the implementation or optimization setup is likely wrong."
    ]
  },
  {
    "id": 111,
    "text": "What is a CNN?",
    "answer": [
      "A Convolutional Neural Network uses learnable filters that slide across local regions, sharing weights across spatial positions.",
      "This gives locality and translation-related inductive bias with far fewer parameters than fully connected layers on images.",
      "CNNs are widely used for images, video, audio spectrograms, and other grid-like data."
    ]
  },
  {
    "id": 112,
    "text": "What are the main layers in a CNN?",
    "answer": [
      "Typical components are convolution, nonlinear activation, normalization, pooling/downsampling, and a final prediction head.",
      "Modern architectures also use residual/skip connections, global average pooling, depthwise separable convolution, and attention."
    ]
  },
  {
    "id": 113,
    "text": "What is padding: valid vs. same?",
    "answer": [
      "Valid padding adds no border padding, so spatial dimensions shrink after convolution.",
      "Same padding adds padding so output spatial size is preserved for stride 1.",
      "Padding affects border information, feature-map size, and receptive field geometry."
    ]
  },
  {
    "id": 114,
    "text": "What is stride?",
    "answer": [
      "Stride is the number of input positions a convolutional filter moves per step.",
      "Larger stride downsamples the feature map, reducing compute and spatial resolution."
    ]
  },
  {
    "id": 115,
    "text": "What is pooling?",
    "answer": [
      "Pooling reduces spatial resolution, commonly with max or average pooling, making representations cheaper and somewhat more invariant to small shifts.",
      "Many modern CNNs also use strided convolution or global average pooling instead of heavy pooling stacks."
    ]
  },
  {
    "id": 116,
    "text": "What is a receptive field and why does it matter?",
    "answer": [
      "A neuron's receptive field is the region of the original input that can influence that neuron.",
      "Stacking convolutions, using larger kernels, dilation, or downsampling increases receptive field.",
      "Tasks needing global context require a sufficiently large effective receptive field, not just many local filters."
    ]
  },
  {
    "id": 117,
    "text": "Why use 1x1 convolutions?",
    "answer": [
      "A 1x1 convolution mixes information across channels at each spatial location without directly mixing neighboring pixels.",
      "It can change channel dimension, create bottlenecks, reduce compute before expensive convolutions, and add nonlinear channel combinations."
    ]
  },
  {
    "id": 118,
    "text": "What is data augmentation for vision?",
    "answer": [
      "Data augmentation creates label-preserving training variants such as flips, crops, color changes, noise, Cutout, MixUp, or CutMix.",
      "It increases effective data diversity and regularizes the model.",
      "Transforms must respect the task; for example, a horizontal flip may be invalid for text or certain medical images."
    ]
  },
  {
    "id": 119,
    "text": "What is transfer learning?",
    "answer": [
      "Transfer learning starts from a model pretrained on a large source dataset and adapts it to a target task.",
      "Common strategies are feature extraction with frozen layers, then partial/full fine-tuning with a smaller learning rate.",
      "It is especially valuable when target labels are limited and source representations are relevant."
    ]
  },
  {
    "id": 120,
    "text": "What is an RNN?",
    "answer": [
      "A Recurrent Neural Network processes sequences by maintaining a hidden state that is updated at each time step.",
      "The same parameters are reused across time, allowing variable-length sequence modeling.",
      "Basic RNNs struggle with long-range dependencies because of vanishing/exploding gradients."
    ]
  },
  {
    "id": 121,
    "text": "What is backpropagation through time (BPTT)?",
    "answer": [
      "BPTT unrolls an RNN across time and applies backpropagation through the unrolled computation graph.",
      "Gradients accumulate through repeated recurrent transitions, which creates the vanishing/exploding gradient",
      "Truncated BPTT limits how far gradients propagate to reduce compute and instability."
    ]
  },
  {
    "id": 122,
    "text": "What is an LSTM and why was it introduced?",
    "answer": [
      "LSTM is a gated recurrent architecture designed to preserve information and gradient flow over longer sequences.",
      "A memory cell plus input, forget, and output gates controls what to write, retain, and expose.",
      "It mitigates, but does not completely eliminate, long-range optimization problems."
    ]
  },
  {
    "id": 123,
    "text": "Why do LSTMs use both sigmoid and tanh?",
    "answer": [
      "Sigmoid outputs values between 0 and 1, so it works naturally as a gate controlling how much information passes.",
      "tanh outputs bounded signed candidate/state content in [-1,1], which helps represent information centered around zero.",
      "Together, gates modulate the content written to and read from the cell state."
    ]
  },
  {
    "id": 124,
    "text": "What is a GRU?",
    "answer": [
      "A Gated Recurrent Unit is a simpler gated RNN with update and reset gates and no separate cell state in the LSTM sense.",
      "It has fewer parameters and can train faster; performance relative to LSTM is task-dependent."
    ]
  },
  {
    "id": 125,
    "text": "What is teacher forcing?",
    "answer": [
      "In sequence-to-sequence RNN training, teacher forcing feeds the true previous token as the next decoder input instead of the model's own previous prediction.",
      "It speeds learning but creates exposure bias because inference conditions on the model's own potentially wrong outputs.",
      "Scheduled sampling is one attempted mitigation, while modern Transformer training uses related next-token teacher-forced objectives."
    ]
  },
  {
    "id": 126,
    "text": "What are limitations of LSTMs compared with attention/Transformers?",
    "answer": [
      "LSTMs process sequence steps recurrently, limiting parallelism and making very long dependency paths difficult.",
      "Attention provides shorter direct paths between tokens and allows highly parallel training.",
      "LSTMs can still be attractive for streaming, smaller models, or resource-constrained sequential tasks."
    ]
  },
  {
    "id": 127,
    "text": "What is an autoencoder?",
    "answer": [
      "An autoencoder learns to reconstruct its input through an encoder, a latent representation, and a decoder.",
      "A constrained bottleneck or regularization forces the latent space to capture useful structure.",
      "Uses include representation learning, denoising, anomaly detection, and dimensionality reduction."
    ]
  },
  {
    "id": 128,
    "text": "Autoencoder vs. PCA?",
    "answer": [
      "PCA learns a linear orthogonal projection that maximizes variance and has a closed-form solution.",
      "Autoencoders can learn nonlinear representations and complex decoders, but require optimization, more data, and regularization.",
      "A linear autoencoder with suitable constraints is closely related to PCA."
    ]
  },
  {
    "id": 129,
    "text": "What is a denoising autoencoder?",
    "answer": [
      "A denoising autoencoder corrupts the input and trains the network to reconstruct the clean original.",
      "This encourages robust features instead of learning a trivial identity mapping."
    ]
  },
  {
    "id": 130,
    "text": "What is a sparse autoencoder?",
    "answer": [
      "A sparse autoencoder adds a sparsity constraint or penalty so only a small fraction of hidden units are active for an input.",
      "This can learn useful overcomplete representations even when the latent dimension is not smaller than the input."
    ]
  },
  {
    "id": 131,
    "text": "What is a variational autoencoder (VAE)?",
    "answer": [
      "A VAE is a probabilistic generative model whose encoder predicts a distribution over latent variables, usually parameterized by mean and variance.",
      "The objective combines reconstruction loss with a KL-divergence regularizer toward a prior; the reparameterization trick enables gradient-based training.",
      "VAEs support sampling and smooth latent spaces but can produce blurrier outputs than some other generative methods."
    ]
  },
  {
    "id": 132,
    "text": "What is a Restricted Boltzmann Machine (RBM)?",
    "answer": [
      "An RBM is an undirected energy-based model with visible and hidden units and no within-layer connections.",
      "It was historically used for unsupervised representation learning and as a building block for deep belief networks.",
      "RBMs are much less common in modern deep-learning practice than backprop-trained architectures."
    ]
  },
  {
    "id": 133,
    "text": "What is a GAN?",
    "answer": [
      "A Generative Adversarial Network trains a generator to produce realistic samples and a discriminator/critic to distinguish generated from real data.",
      "Training is a two-player minimax game and can suffer from instability or mode collapse.",
      "Variants such as Wasserstein GAN change the objective to improve training behavior."
    ]
  },
  {
    "id": 134,
    "text": "What is mode collapse in GANs?",
    "answer": [
      "Mode collapse occurs when the generator maps many latent inputs to a small set of similar outputs, failing to cover the full data distribution.",
      "Mitigations include improved objectives such as Wasserstein losses, regularization, better discriminator balance, minibatch-based techniques, and architectural changes."
    ]
  },
  {
    "id": 135,
    "text": "What is the attention mechanism?",
    "answer": [
      "Attention lets a model compute a context-dependent weighted combination of representations rather than compressing all information through one fixed state.",
      "Queries score keys to produce weights, and those weights combine values.",
      "It provides direct interactions between distant positions and is the core operation of Transformers."
    ]
  },
  {
    "id": 136,
    "text": "What is scaled dot-product attention?",
    "answer": [
      "Compute scores QK^T, divide by sqrt(d_k), apply masking if needed, softmax the scores, then multiply by V.",
      "The scaling prevents dot products from growing with vector dimension and pushing softmax into extremely saturated regions with tiny gradients."
    ]
  },
  {
    "id": 137,
    "text": "Why divide attention scores by sqrt(d_k)?",
    "answer": [
      "If query/key components have roughly unit variance, their dot product variance grows with d_k.",
      "Dividing by sqrt(d_k) keeps score scale more stable so softmax remains in a useful gradient range."
    ]
  },
  {
    "id": 138,
    "text": "What is multi-head attention?",
    "answer": [
      "Multi-head attention projects Q, K, and V into several subspaces, performs attention independently in each head, concatenates the head outputs, and projects again.",
      "Different heads can specialize in different relations or representation subspaces, increasing expressiveness without one attention map doing everything."
    ]
  },
  {
    "id": 139,
    "text": "Why do Transformers need positional information?",
    "answer": [
      "Self-attention alone is permutation-equivariant and has no inherent notion of token order.",
      "Positional information is therefore added or encoded through learned embeddings, sinusoidal encodings, relative position biases, or rotary methods.",
      "This lets the model distinguish sequences containing the same tokens in different orders."
    ]
  },
  {
    "id": 140,
    "text": "Sinusoidal vs. learned positional embeddings?",
    "answer": [
      "Sinusoidal encodings are fixed, parameter-free functions of position and can extrapolate in a structured way beyond trained positions, though behavior may still degrade.",
      "Learned positional embeddings are flexible and optimized for the training range but are tied to the learned maximum positions unless extended.",
      "Modern models also use relative or rotary schemes because they encode pairwise position relationships more directly."
    ]
  },
  {
    "id": 141,
    "text": "Transformer vs. RNN?",
    "answer": [
      "Transformers model token interactions with attention and allow parallel processing during training; RNNs update a state sequentially.",
      "Transformers usually handle long-range dependencies and large-scale training better, but attention can have O(n^2) memory/compute with sequence length.",
      "RNNs can be attractive for true streaming and small recurrent-state inference."
    ]
  },
  {
    "id": 142,
    "text": "What is causal masking?",
    "answer": [
      "In autoregressive models, causal masking prevents a token from attending to future tokens during training.",
      "This preserves the same information constraint used at generation time while still allowing parallel computation of training positions."
    ]
  },
  {
    "id": 143,
    "text": "What are residual connections and why are they important?",
    "answer": [
      "A residual block outputs x + F(x), creating a direct path for information and gradients.",
      "This makes very deep networks easier to optimize and is fundamental in ResNets and Transformers."
    ]
  },
  {
    "id": 144,
    "text": "Pre-LayerNorm vs. Post-LayerNorm Transformers?",
    "answer": [
      "Post-LayerNorm applies normalization after adding the residual; Pre-LayerNorm normalizes before the attention/MLP sublayer and keeps a cleaner residual path.",
      "Pre-LayerNorm generally improves optimization stability and gradient flow in very deep Transformers, which is why it is common in modern large models."
    ]
  },
  {
    "id": 145,
    "text": "What is a Transformer block made of?",
    "answer": [
      "A standard block contains self-attention, a position-wise feed-forward/MLP sublayer, residual connections, and layer normalization.",
      "Decoder-style blocks also use causal masking; encoder-decoder models may add cross-attention from decoder queries to encoder keys/values."
    ]
  },
  {
    "id": 146,
    "text": "What is the feed-forward network inside a Transformer?",
    "answer": [
      "After attention mixes information across positions, a position-wise MLP independently transforms each token representation, typically expanding the hidden dimension and projecting it back.",
      "The MLP supplies substantial model capacity and nonlinear feature transformation."
    ]
  },
  {
    "id": 147,
    "text": "What is the main limitation of standard self-attention on long sequences?",
    "answer": [
      "Standard attention forms an n x n score matrix, giving O(n^2) memory and compute in sequence length.",
      "Long-context systems address this with sparse/local attention, low-rank/kernel approximations, recurrence/compression, efficient kernels, or state-space/hybrid approaches."
    ]
  }
];

const EXPECTED_QUESTION_COUNT = 147;

const orb = document.getElementById("questionOrb");
const card = document.getElementById("questionCard");
const practice = document.querySelector(".practice");
const questionText = document.getElementById("questionText");
const answerSection = document.getElementById("answerSection");
const answerText = document.getElementById("answerText");
const topicPicker = document.getElementById("topicPicker");
const topicPickerToggle = document.getElementById("topicPickerToggle");
const topicPickerMenu = document.getElementById("topicPickerMenu");
const topicPickerLabel = document.getElementById("topicPickerLabel");
const topicOptions = [...document.querySelectorAll(".topic-option")];

const categoryConfig = {
  all: { label: "All topics", minId: 1, maxId: 147 },
  "data-science": { label: "Data Science", minId: 1, maxId: 38 },
  "machine-learning": { label: "Machine Learning", minId: 39, maxId: 79 },
  "deep-learning": { label: "Deep Learning", minId: 80, maxId: 147 }
};

let selectedCategory = "all";
let questionDeck = [];
let lastQuestionId = null;
let currentQuestion = null;
let typingTimer = null;
let runId = 0;

const deckStoragePrefix = "practice-question-deck-v4";
const lastQuestionStoragePrefix = "practice-last-question-v4";

function getQuestionPool(category = selectedCategory) {
  const config = categoryConfig[category] || categoryConfig.all;
  return questions.filter(
    (question) => question.id >= config.minId && question.id <= config.maxId
  );
}

function validateQuestionBank() {
  const ids = questions.map((question) => question.id);
  const uniqueIds = new Set(ids);
  const hasEveryId = ids.every((id, index) => id === index + 1);
  const hasAnswers = questions.every(
    (question) => Array.isArray(question.answer) && question.answer.length > 0
  );
  const categoryCountsAreCorrect =
    getQuestionPool("data-science").length === 38 &&
    getQuestionPool("machine-learning").length === 41 &&
    getQuestionPool("deep-learning").length === 68;

  if (
    questions.length !== EXPECTED_QUESTION_COUNT ||
    uniqueIds.size !== EXPECTED_QUESTION_COUNT ||
    !hasEveryId ||
    !hasAnswers ||
    !categoryCountsAreCorrect
  ) {
    console.error("Question bank validation failed.");
  }
}

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function deckStorageKey(category = selectedCategory) {
  return `${deckStoragePrefix}-${category}`;
}

function lastQuestionStorageKey(category = selectedCategory) {
  return `${lastQuestionStoragePrefix}-${category}`;
}

function saveDeck() {
  try {
    localStorage.setItem(
      deckStorageKey(),
      JSON.stringify(questionDeck.map((question) => question.id))
    );
    if (lastQuestionId !== null) {
      localStorage.setItem(lastQuestionStorageKey(), String(lastQuestionId));
    }
  } catch (_) {
    // The practice flow still works if storage is unavailable.
  }
}

function restoreDeck() {
  questionDeck = [];
  lastQuestionId = null;

  try {
    const pool = getQuestionPool();
    const poolById = new Map(pool.map((question) => [question.id, question]));
    const storedDeck = JSON.parse(localStorage.getItem(deckStorageKey()) || "[]");
    const storedLast = Number(localStorage.getItem(lastQuestionStorageKey()));

    if (Number.isInteger(storedLast) && poolById.has(storedLast)) {
      lastQuestionId = storedLast;
    }

    if (!Array.isArray(storedDeck)) return;

    const seen = new Set();
    const restored = [];

    for (const id of storedDeck) {
      if (!Number.isInteger(id) || !poolById.has(id) || seen.has(id)) continue;
      seen.add(id);
      restored.push(poolById.get(id));
    }

    questionDeck = restored;
  } catch (_) {
    questionDeck = [];
    lastQuestionId = null;
  }
}

function refillQuestionDeck() {
  questionDeck = shuffle(getQuestionPool());

  // Every selected pool is exhausted once before a fresh shuffled cycle starts.
  // Avoid repeating the previous cycle's final question immediately.
  if (
    questionDeck.length > 1 &&
    lastQuestionId !== null &&
    questionDeck[0].id === lastQuestionId
  ) {
    const swapIndex = 1 + Math.floor(Math.random() * (questionDeck.length - 1));
    [questionDeck[0], questionDeck[swapIndex]] = [questionDeck[swapIndex], questionDeck[0]];
  }

  saveDeck();
}

function getNextQuestion() {
  if (questionDeck.length === 0) {
    refillQuestionDeck();
  }

  const nextQuestion = questionDeck.shift();
  lastQuestionId = nextQuestion.id;
  saveDeck();
  return nextQuestion;
}

function setPickerOpen(isOpen) {
  topicPicker.classList.toggle("is-open", isOpen);
  topicPickerToggle.setAttribute("aria-expanded", String(isOpen));
  topicPickerMenu.setAttribute("aria-hidden", String(!isOpen));
}

function resetQuestionDisplayForCategoryChange() {
  clearTyping();
  resetAnswer();
  currentQuestion = null;
  questionText.textContent = "";
  card.classList.remove("is-visible", "can-reveal");
  card.setAttribute("aria-hidden", "true");
  card.setAttribute("tabindex", "-1");
}

function selectCategory(category) {
  if (!categoryConfig[category]) return;

  selectedCategory = category;
  topicPickerLabel.textContent = categoryConfig[category].label;

  topicOptions.forEach((option) => {
    const isActive = option.dataset.category === category;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });

  restoreDeck();
  resetQuestionDisplayForCategoryChange();
  setPickerOpen(false);
}

function clearTyping() {
  runId += 1;
  clearTimeout(typingTimer);
}

function typeInto(element, value, options = {}) {
  const {
    minDelay = 18,
    maxDelay = 44,
    punctuationMin = 110,
    punctuationMax = 180,
    onComplete = null
  } = options;

  clearTyping();
  const currentRun = runId;
  element.textContent = "";
  let index = 0;

  const typeNext = () => {
    if (currentRun !== runId) return;

    if (index < value.length) {
      const currentChar = value[index];
      element.textContent += currentChar;
      index += 1;

      const delay = /[,.?!:;]/.test(currentChar)
        ? punctuationMin + Math.random() * (punctuationMax - punctuationMin)
        : minDelay + Math.random() * (maxDelay - minDelay);

      typingTimer = setTimeout(typeNext, delay);
      return;
    }

    if (typeof onComplete === "function") onComplete();
  };

  typeNext();
}

function resetAnswer() {
  answerText.replaceChildren();
  answerText.style.removeProperty("--answer-font-size");
  answerSection.classList.remove("is-visible");
  answerSection.setAttribute("aria-hidden", "true");
  card.classList.remove("answer-open", "can-reveal", "is-constrained");
  card.style.removeProperty("height");
  practice.classList.remove("answer-active");
}

function renderAnswer(answerBullets) {
  const fragment = document.createDocumentFragment();

  answerBullets.forEach((bullet) => {
    const paragraph = document.createElement("p");
    paragraph.className = "answer-bullet";
    paragraph.textContent = bullet;
    fragment.appendChild(paragraph);
  });

  answerText.replaceChildren(fragment);
}

function getMaxAnswerCardHeight() {
  if (window.innerHeight <= 670) {
    return Math.min(window.innerHeight * 0.45, 290);
  }

  if (window.innerWidth <= 720) {
    return Math.min(window.innerHeight * 0.45, 360);
  }

  if (window.innerHeight <= 860) {
    return Math.min(window.innerHeight * 0.43, 340);
  }

  return Math.min(window.innerHeight * 0.39, 350);
}

function fitAnswerToCard() {
  const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const availableHeight = answerText.clientHeight;
  if (!availableHeight) return;

  let size = Math.min(21, Math.max(15, rootSize * 1.18));
  const minimumSize = window.innerWidth <= 720 ? 13.5 : 14;

  answerText.style.setProperty("--answer-font-size", `${size}px`);

  while (answerText.scrollHeight > availableHeight + 1 && size > minimumSize) {
    size -= 0.5;
    answerText.style.setProperty("--answer-font-size", `${size}px`);
  }
}

function sizeAnswerCard() {
  if (!card.classList.contains("answer-open")) return;

  card.classList.remove("is-constrained");
  card.style.removeProperty("height");
  answerText.style.removeProperty("--answer-font-size");

  // Measure the content at its natural height first. This keeps short answers compact
  // instead of reserving a large empty rectangle for every question.
  const naturalHeight = Math.ceil(card.scrollHeight);
  const maxHeight = Math.floor(getMaxAnswerCardHeight());

  if (naturalHeight <= maxHeight) {
    card.style.height = `${naturalHeight}px`;
    return;
  }

  // Long answers still stay fully inside the viewport: constrain the card only when
  // necessary, then reduce answer text just enough to fit without internal scrolling.
  card.classList.add("is-constrained");
  card.style.height = `${maxHeight}px`;
  fitAnswerToCard();
}

function revealAnswer() {
  if (!currentQuestion || card.classList.contains("answer-open")) return;

  // If the user clicks while the question is still typing, complete it first.
  clearTyping();
  questionText.textContent = currentQuestion.text;

  card.classList.remove("can-reveal");
  card.classList.add("answer-open");
  practice.classList.add("answer-active");
  answerSection.classList.add("is-visible");
  answerSection.setAttribute("aria-hidden", "false");

  renderAnswer(currentQuestion.answer);
  requestAnimationFrame(() => {
    sizeAnswerCard();
    requestAnimationFrame(sizeAnswerCard);
  });
}

function generateQuestion() {
  clearTyping();
  resetAnswer();
  currentQuestion = getNextQuestion();

  orb.classList.remove("is-generating");
  void orb.offsetWidth;
  orb.classList.add("is-generating");

  card.classList.add("is-visible", "can-reveal");
  card.setAttribute("aria-hidden", "false");
  card.setAttribute("tabindex", "0");

  typeInto(questionText, currentQuestion.text, {
    minDelay: 18,
    maxDelay: 44,
    punctuationMin: 110,
    punctuationMax: 180
  });
}

validateQuestionBank();
restoreDeck();

topicPickerToggle.addEventListener("click", () => {
  setPickerOpen(!topicPicker.classList.contains("is-open"));
});

topicOptions.forEach((option) => {
  option.addEventListener("click", () => selectCategory(option.dataset.category));
});

document.addEventListener("click", (event) => {
  if (!topicPicker.contains(event.target)) setPickerOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setPickerOpen(false);
    topicPickerToggle.focus();
  }
});

orb.addEventListener("click", generateQuestion);
card.addEventListener("click", revealAnswer);
card.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && !card.classList.contains("answer-open")) {
    event.preventDefault();
    revealAnswer();
  }
});

window.addEventListener("resize", () => {
  if (card.classList.contains("answer-open")) sizeAnswerCard();
});
