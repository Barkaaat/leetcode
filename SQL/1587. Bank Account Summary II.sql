select
	U.name,
	sum(T.amount) as balance
from
	Users U left join Transactions T
on
	U.account = T.account
group by
	U.name
having
	sum(T.amount) > 10000