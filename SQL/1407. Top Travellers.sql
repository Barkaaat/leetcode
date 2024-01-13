select
	U.name,
	isnull(sum(R.distance), 0) as travelled_distance
from
	Users U left join Rides R
on
	R.user_id = U.id
group by
	U.id,
	U.name
order by 
	sum(R.distance) desc,
	U.name asc;